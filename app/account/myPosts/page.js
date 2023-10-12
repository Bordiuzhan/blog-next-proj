'use client';

import Link from 'next/link';

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

  const userId = session?.user?._id || session?.user?.id;

  if (!session || !session.user || !userId) {
    return <h1>Loading...</h1>;
  }

  const myPosts = posts.filter((post) => post.owner === session.user.email);
  if (myPosts.length === 0) {
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
