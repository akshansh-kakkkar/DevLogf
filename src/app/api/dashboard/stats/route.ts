import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const totalPosts = await prisma.post.count({
      where: {
        authorId: session.user.id,
      },
    });
    const draftPending = await prisma.post.count({
      where: {
        authorId: session.user.id,
        isDraft: true,
      },
    });
    const totalReads = await prisma.postView.count({
      where: {
        post: {
          authorId: session.user.id
        }
      }
    })
    const totalLikes = await prisma.like.count({
      where: {
        post: {
          authorId: session.user.id
        }
      }
    })
    return NextResponse.json({
      totalPosts,
      draftPending,
      totalReads,
      totalLikes
    });
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
