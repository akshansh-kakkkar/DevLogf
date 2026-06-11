import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";
import { NextResponse } from "next/server";

export async function GET(){
    const session = await getSession();
    if(!session){
        return NextResponse.json({error:"Unauthorized"}, {status:401})
    }
    const posts = await  prisma.post.findMany({
        where : {
            authorId : session.user.id,
        },
        orderBy : {
            createdAt : "desc"
        }
    })
    return NextResponse.json({posts})
}