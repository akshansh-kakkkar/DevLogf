import { comment, users, post } from "@/app/data/mockData";
import { NextResponse } from "next/server";

export async function GET(request:Request){
    await new Promise(resolve => setTimeout(resolve,500));
    const {searchParams} = new URL(request.url);
    const authorId = searchParams.get('authorId');
    const postId = searchParams.get("postId");
    const limit = searchParams.get('limit');
    let filteredComments = comment
    if(authorId){
        const parseAuthorId = parseInt(authorId);
        if(!isNaN(parseAuthorId)){
            filteredComments = filteredComments.filter(c => c.id === parseAuthorId )
        }
    }
    if(postId){
        const parsedPostId = parseInt(postId) ;
        if(!isNaN(parsedPostId)){
            filteredComments = filteredComments.filter(c=> c.postId == parsedPostId)
        }
    }
    const commentsWithDetails = filteredComments.map(comment => ({
    ...comment, author : users.find(user => user.id === comment.authorId),
    post : post.find(posts => posts.id === comment.postId)
    }))
    const sortedComments = commentsWithDetails.sort(
        (a,b)=>new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    let result = sortedComments;
    if(limit){
        const parsedLimit= parseInt(limit);
        if(!isNaN(parsedLimit) && parsedLimit > 0){
            result = sortedComments.slice(0, parsedLimit)
        }
    }
    return NextResponse.json({
        total : filteredComments,
        showing : result,
        comments : result
    })
}