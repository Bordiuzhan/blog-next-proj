'use client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Link from 'next/link';

import { fetchPosts } from '@/redux/operations';
import { selectVisiblePosts } from '@/redux/selectors';
import { PostCard } from './PostCrad';

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectVisiblePosts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  console.log(posts);

  return (
    <div className='wrapper-posts-list'>
      <ul>
        {posts.map((post) => (
          <li className='posts-list' key={post._id}>
            <Link className='post-link' href={`/blog/${post._id}`}><PostCard data={post}/></Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Posts };
