import { getServerSession } from 'next-auth';
import { authConfig } from '@/config/auth';

import Link from 'next/link';

const BASE_URL = process.env.BASE_URL;

async function getMyPosts(owner) {
  const response = await fetch(`${BASE_URL}/api/account/${owner}`);

  return response.json();
}

export default async function MyPosts() {
  const session = await getServerSession(authConfig);
  console.log(session.user._id);

  const posts = await getMyPosts(session.user._id);

  console.log(posts);

  if (posts === []) {
    return <h3>You have no posts yet</h3>;
  }

  return (
    <ul>
      {posts.map((post) => (
        <li key={post._id}>
          <Link href={`/blog/${post._id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
