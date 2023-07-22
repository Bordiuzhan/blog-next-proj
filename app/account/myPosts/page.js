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
import { PostCard } from '@/components/PostCrad';

export default function MyPosts() {
  const { data: session, status } = useSession();
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  console.log(posts);
  console.log(session);

  const userId = session?.user?._id || session?.user?.id;
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

  if (myPosts === []) {
    return <h3>You have no posts yet</h3>;
  }

  return (
    <div className="wrapper-posts-list">
      <ul>
        {myPosts.map((post) => (
          <li className="posts-list" key={post._id}>
            <Link className="post-link" href={`/blog/${post._id}`}>
              <PostCard data={post} />
              <button className="delete-btn">Delete</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
