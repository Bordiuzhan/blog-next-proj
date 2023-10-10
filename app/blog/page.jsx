import { PostSearch } from '@/components/PostSearch';
import { Posts } from '@/components/Posts';

export const metadata = {
  title: 'Blog',
};

export default async function Blog() {
  return (
    <>
      <div className="img-hero blog">
        <div className="title-wrapper">
          <h1 className="title-hero">Blog page</h1>
          <PostSearch />
        </div>
      </div>
      {/* <Posts /> */}
    </>
  );
}
