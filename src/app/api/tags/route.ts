import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request : Request){
    try{
    const {searchParams} = new URL(request.url)
    const search = searchParams.get("search") || "";
    const tags = await prisma.tag.findMany({
        where : {
            name : {
                contains : search,
                mode : "insensitive",
            },
        },
        take : 8,
        orderBy : {
            name : "desc"
        }
    })
    return NextResponse.json(tags)
}
catch(error){
    return NextResponse.json({error : "Failed to fetch tags"}, {status : 500})
}
}
