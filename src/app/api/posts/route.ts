import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";

export async function GET(request: Request) {
  try{
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const url = new URL(request.url);
  const search = url.searchParams.get("search") || "";
  const page = parseInt(url.searchParams.get("page") || "1");
  const limit = parseInt(url.searchParams.get("limit") || "10");
  const skip = (page - 1) * limit;

  const posts = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          content: {
            contains: search,
            mode: "insensitive",
          },
        },
      ],
    },
      include: {
        author: true,
        comments: true,
        likes: true,
      },
    
      skip,
      take: limit,

      orderBy: {
        createdAt: "desc",
      },
    
  });
  const totalPosts = await prisma.post.count();
  return NextResponse.json({
    posts, 
    pagenation : {
        currentPage : page,
        totalPosts,
        totalPages : Math.ceil(totalPosts/limit)
    }
  })
}
catch(error){
  return NextResponse.json({error : "Something went wrong whiel fetching the posts."}, {status : 500})
}
}

export async function POST(request:Request) {
  try{
    const body = await request.json();
    if(!body.title || !body.image || !body.content){
      return NextResponse.json({error : "All Fields are required"}, {status : 400})
    }
    const session = await getSession();
    if(!session){
      return NextResponse.json({error : "Unauthorized"}, {status : 401})
    }
    const newPost = await prisma.post.create({
      data : {
        title : body.title,
        content : body.content,
        image : body.image,
        authorId : session.user.id
      },
      include : {
        author : true,
        comments : true,
        likes : true,
      }
    })
    return NextResponse.json(newPost, {status: 201})
  }catch(error){
    return NextResponse.json({error : "Something Went Wrong while posting the post."}, {status : 500})
  }
}