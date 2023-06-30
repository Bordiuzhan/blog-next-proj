import dbConnect from '@/lib/dbConnect';
import Posts from '@/models/Posts';

export default async function addPost(data) {

  await dbConnect();
  console.log(data);
  const post = await Posts.create(data);

  return post;
}
