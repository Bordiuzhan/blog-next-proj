import { NextResponse } from 'next/server';

import handlerPosts from './handler';
import addPost from './addPost';

const handler = async (req) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const data = await handlerPosts();
        if (!data) return NextResponse.json('Unable to fetch posts');
        return NextResponse.json(data);
      } catch (error) {
        console.log(error);
        if (error instanceof Error) {
          return NextResponse.json(
            {
              message: error.message,
            },
            { status: 400 }
          );
        }
      }
    case 'POST':
      try {
        const body = await req.json();
        console.log('API POST ROUTE', body);
        const data = await addPost(body);
        return NextResponse.json(data);
      } catch (error) {
        console.log(error);
        if (error instanceof Error) {
          return NextResponse.json(
            {
              message: error.message,
            },
            { status: 400 }
          );
        }
      }
  }
};

export { handler as GET, handler as POST };
