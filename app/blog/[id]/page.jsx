import Link from 'next/link';

import { Post } from '@/components/Post';

const BASE_URL = process.env.BASE_URL;

async function getData(id) {
  const response = await fetch(`${BASE_URL}/api/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  return response.json();
}

export async function generateMetadata({ params: { id } }) {
  const post = await getData(id);

  return {
    title: post.title,
  };
}

export default async function PostPage({ params: { id } }) {
  const post = await getData(id);

  return (
    <>
      {/* <Link className="back-btn" key={'Go back'} href={'/blog'}>
        ⬅ Go back
      </Link> */}
      <Post post={post}></Post>
    </>
  );
}
