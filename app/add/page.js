'use client';

import { addPost } from '@/redux/operations';
import { nanoid } from 'nanoid';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

export default function PageAddPost() {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const res = {
      
      title: formData.get('title'),
      body: formData.get('post'),
    };
    console.log(res);
    dispatch(addPost(res));
    router.push('/blog');
  };
  return (
    <div>
      <h1>Add Post</h1>
      <form onSubmit={handleSubmit} className="add-form">
        <input type="text" name="title" placeholder="Title" required />
        <textarea type="text" name="post" placeholder="Text.." required />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}
