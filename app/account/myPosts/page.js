'use client';

// import { getServerSession } from 'next-auth';
// import { authConfig } from '@/config/auth';

import Link from 'next/link';

// const BASE_URL = process.env.BASE_URL;

// async function getMyPosts(owner) {
//   const response = await fetch(`${BASE_URL}/api/account/${owner}`);

//   return response.json();
// }
import { fetchPosts } from '@/redux/operations';
import { selectPosts } from '@/redux/selectors';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function MyPosts() {
  const { data: session, status } = useSession();
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  console.log(posts);
  console.log(session);
  
  const userId=session?.user?._id ||session?.user?.id
console.log(userId);

  if (!session || !session.user || !userId) {
    return <h1>Loading...</h1>;
  }

  const myPosts = posts.filter((post) => post.owner === session.user.email);
  console.log(myPosts);
  // const session = await getServerSession(authConfig);
  // console.log(session.user._id);

  // const posts = await getMyPosts(session.user._id);

  // console.log(posts);

  // if (posts === []) {
  //   return <h3>You have no posts yet</h3>;
  // }

  return (
    
    <ul>
      {myPosts.map((post) => (
        <li key={post._id}>
          <Link href={`/blog/${post._id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
