import Image from "next/image";
async function getPost(id:string) {
    const res = await fetch(
        `http://localhost:3000/api/posts/${id}`,
        {
            cache : "no-store"
        }
    )
    return res.json();
}

export default async function SinglePost({params}: {params: {id : string}}){
    const post = await getPost(params.id);
    return(
        <div key={post.id}>
            <div>
                {post.image && (<Image width={500} height={400} src={post.image } alt={post.title || "post image"} />)}
            </div>
            <h1>{post.title}</h1>
            <div>

            </div>
        </div>
    )
}