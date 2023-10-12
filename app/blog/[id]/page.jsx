import Link from 'next/link';
import { Post } from '@/components/Post';

// const BASE_URL = process.env.BASE_URL;

// export function generateMetadata({ params: { id } }) {
//   return {
//     // title: post.title,
//   };
// }

export default function PostPage({ params: { id } }) {
  return (
    <>
      <Link className="back-btn" key={'Go back'} href={'/blog'}>
        ⬅ Go back
      </Link>
      {id && <Post data={id} />}
    </>
  );
}
