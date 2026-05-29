import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";
import { NextResponse } from "next/server";



export async function GET() {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const sessions = await prisma.session.findMany({
    where: {
      userId: session?.user.id,
    },
    orderBy: {
      updatedAt: "desc",
    },
    take: 5,
  });
  const SessionLocation = await Promise.all(
    sessions.map(async (session) => {
      let locationStr = "Unknown Location";
      try {
        const ip = session.ipAddress;
        if (ip && ip !== "127.0.0.1" && ip !== "::1" && ip !== "localhost") {
          const geo = await fetch(`https://ipapi.co/${ip}/json/`);
          const location = await geo.json();
          if (location.city && location.country_name) {
            locationStr = `${location.city}, ${location.country_name}`;
          }
        }
      } catch (error) {
        console.error("Geolocation lookup failed:", error);
      }
      return {
        ...session, location: locationStr
      }
    }),
  );
  return NextResponse.json({
    message: "All sessions Fetched Successfully",
    
    sessions : SessionLocation
  });
}

export async function DELETE() {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const revokeSessions = await prisma.session.deleteMany({
    where: {
      userId: session.user.id,
    },
  });
  return NextResponse.json({ message: "All sessions Revoked", revokeSessions });
}
