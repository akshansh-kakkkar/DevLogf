import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get("authorization");
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const now = new Date();

    // Find all scheduled posts whose time has passed and are still drafts
    const duePosts = await prisma.post.findMany({
      where: {
        isDraft: true,
        ScheduledAt: {
          lte: now,
          not: null,
        },
      },
    });

    for (const post of duePosts) {
      await prisma.post.update({
        where: { id: post.id },
        data: {
          isDraft: false,
          publishedAt: now,
        },
      });
    }

    return NextResponse.json({
      success: true,
      publishedCount: duePosts.length,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Cron job failed" },
      { status: 500 },
    );
  }
}
