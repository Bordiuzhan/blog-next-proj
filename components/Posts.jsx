'use client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Link from 'next/link';

import { fetchPosts } from '@/redux/operations';
import { selectVisiblePosts } from '@/redux/selectors';


const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectVisiblePosts);

  useEffect(() => {
    dispatch(fetchPosts());    
  }, [dispatch]);



  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export { Posts };
