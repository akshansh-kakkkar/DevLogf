import Image from 'next/image';
import Link from 'next/link';
async function getPosts() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  return res.json();
}
export default async function PostPage(){
    const data = await getPosts();
    return(
        <div>
            <h1>Posts</h1>
            <div className='flex gap-4 w-full justify-center '>
               
                {data.post.map((post:any)=>(
                     <Link key={post.id} href={`/posts/${post.id}`}>
                    <div  className='bg-gray-300 w-fit gap-12  '>
                        <Image width={400} height={200} src={post.image} alt={post.title} />
                        <div>{post.title}</div>
                        <div>{post.author?.name}</div>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}