import dbConnect from '@/lib/dbConnect';
import Posts from '@/models/Posts';
import { nanoid } from 'nanoid';

export default async function addPost({ title, body }) {
  const post = { userId: nanoid(), title, body };
  await dbConnect();
  const newPost = await Posts.create(post);

  return newPost;
}
