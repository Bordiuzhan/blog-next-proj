import { Navigation } from "@/components/Navigation";
import Link from "next/link";

const BASE_URL=process.env.BASE_URL

async function getData(id) {
  const response = await fetch(
    `${BASE_URL}/api/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return response.json();
}

export async function generateMetadata({ params: { id } }) {
    const post = await getData(id);

  return {
    title: post.title,
  };
}

export default async function Post({ params: { id } }) {
  const post = await getData(id);

  return (
    <>
    <Link key={' Go back'} href={'/blog'}>⬅ Go back</Link>
      <h1> {post.title}</h1>
      <p>{post.body}</p>
    </> );
}