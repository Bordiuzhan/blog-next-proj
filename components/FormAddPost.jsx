'use client';

import { addPost } from "@/redux/operations";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";


export default async function FormAddPosts() {
    const router = useRouter();
  const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const formData = new FormData(event.currentTarget);
    
        const res = {
          
          title: formData.get('title'),
          body: formData.get('post'),
        };
        dispatch(addPost(res));
        router.push('/blog');
      };
    
      return (
        <form onSubmit={handleSubmit} className="add-form">
        <input type="text" name="title" placeholder="Title" className="add-title"required />
        <textarea type="text" name="post" placeholder="Text.." className="add-text" required />
        <button type="submit" className="add-button">Add Post</button>
      </form>
      );
    }





