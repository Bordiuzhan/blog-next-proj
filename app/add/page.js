import FormAddPosts from '@/components/FormAddPost';
import { authConfig } from '@/config/auth';
import { getServerSession } from 'next-auth';

export const metadata = {
  title: 'Add Blog',
};

export default async function PageAddPost() {
  const session = await getServerSession(authConfig);

  return (
    <div>
      <div className="img-hero add">
        <div className="title-wrapper">
          <h1 className="title-hero">Add Post</h1>
        </div>
        <FormAddPosts />
      </div>
    </div>
  );
}
