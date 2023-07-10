import FormAddPosts from "@/components/FormAddPost";
import { authConfig } from "@/config/auth";
import { getServerSession } from "next-auth";




export default async function PageAddPost() {
  const session = await getServerSession(authConfig)

  return (
    <div>
      <h1>Add Post</h1>
      <FormAddPosts></FormAddPosts>
    </div>
  );
}
