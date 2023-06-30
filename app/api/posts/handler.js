import dbConnect from '@/lib/dbConnect';
import Posts from '@/models/Posts';

export default async function handlerPosts() {
  await dbConnect();
  const posts = await Posts.find();

  return posts;
}
