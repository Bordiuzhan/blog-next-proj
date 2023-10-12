'use client';

import { fetchPosts } from '@/redux/operations';
import { selectPostById, selectPosts } from '@/redux/selectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Post = ({ data }) => {
  console.log(typeof data);
  const dispatch = useDispatch();
  const post = useSelector((state) => selectPostById(state, data));

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="container-post">
      {post ? (
        <>
          <h2 className="post-title">{post.title}</h2>
          <div className="container-post-body">
            <p className="post-body">{post.body}</p>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export { Post };
