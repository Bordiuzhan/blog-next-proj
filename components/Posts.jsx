import Link from "next/link"


const Posts = (post) => {
  return (
    <ul>
        {posts.map((post)=>(
            
            <li key={post.id}>
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
        ))}
    </ul>
  )
}

export  {Posts}
