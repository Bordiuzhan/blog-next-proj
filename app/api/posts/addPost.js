import dbConnect from '@/lib/dbConnect';
import Posts from '@/models/Posts';
import { nanoid } from 'nanoid';

export default async function addPost({ title, body }) {
  const post = { userId: nanoid(), title, body };
  console.log('API POSTS ROUTE', post);
  await dbConnect();
  const newPost = await Posts.create(post);
  console.log('API POSTS ROUTE DB', newPost);

  return newPost;
}
