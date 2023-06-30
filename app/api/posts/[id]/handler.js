import dbConnect from "@/lib/dbConnect";
import Posts from "@/models/Posts";


export default async function handlerPost(id) {
  await dbConnect();
  const post = await Posts.findById(id);

  return post;
}
