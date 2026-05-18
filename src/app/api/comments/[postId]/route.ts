import { comment, post, users } from "@/app/data/mockData";
import { NextResponse } from "next/server";

export async function GET(request : Request, {params}:{params :{postId :string}}){
    await new Promise(resolve => setTimeout(resolve, 4000));
    const postId = parseInt(params.postId);
    if(isNaN(postId)){
        return NextResponse.json(
            {error : "Not Found"},
            {status : 400}
        )
    }
    const posts = post.find(p => p.id === postId)
    if(!posts){
        return NextResponse.json({error : "Not Found"}, {status : 404})
    }
    const postComments = comment.filter(comment => comment.postId).map(comment => ({
        ...comment, author : users.find(user   => user.id === comment.authorId)
    })).sort((a,b)=> new Date(a.createdAt).getTime())
    return NextResponse.json({
        postId,
        postTitle : posts.title,
        totalComments : postComments,
})
}  


export async function POST(request : Request, {params}: {params : {postId : string}}){
    try{
        const postId = parseInt(params.postId);
        if(isNaN(postId)){
        return NextResponse.json({error : "Invalid Post"}, {status : 400})
        }
        const posts = post.find(p => p.id === postId);
        if(!post){
            return NextResponse.json({error : "Post not found"}, {status : 404})
        }
        const body = await request.json();
        if(!body.content || !body.authorId){
            return NextResponse.json(
                {error : "Content and authorId are required"}, {status : 400}
            )
        }
        const author = users.find(u => u.id === body.authorId)
        if(!author){
            return NextResponse.json({error : "Author not found"}, {status : 404})
        }
        const newComment = {
            id : Math.max(...comment.map(c=>c.id))+1,
            content : body.content,
            postId : postId,
            authorId :body.authorId,
            createdAt : new Date().toISOString(),
        }
        comment.push(newComment);
        const commentWithAuthor = {
            ...newComment,
            author : author
        };
        return NextResponse.json(commentWithAuthor,{status : 201})
    }
    catch(error){
        return NextResponse.json({error : "Something Went wrong"}, {status : 400})
    }
}