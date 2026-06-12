import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";
import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const { slug } = await params;

    const existingPost = await prisma.post.findUnique({
      where: {
        slug
      },
    });
    if (!existingPost) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    const postId = existingPost.id
    const existingLike = await prisma.like.findUnique({
      where: {
        userId_postId: {
          userId: String(session.user.id),
          postId
        },
      },
    });
    if (existingLike) {
      await prisma.like.delete({
        where: {
          id: existingLike.id,
        },
      });
      return NextResponse.json({ liked: false, message: "Post Unliked" });
    }
    await prisma.like.create({
      data: {
        userId: String(session.user.id),
        postId,
      },
    });
    return NextResponse.json({ liked: true, message: "Post Liked" });
  } catch (error) {
    return NextResponse.json(
      { error: "something went wrong while posting a like." },
      { status: 500 },
    );
  }
}
