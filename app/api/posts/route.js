import { NextResponse } from 'next/server';

import handlerPosts from './handler';
import addPost from './addPost';

const handler = async (req) => {
  const { method } = req;
 console.log(method);

  switch (method) {
    case 'GET':
      try {
        const data = await handlerPosts();
        if (!data) throw new Error('Unable to fetch posts');
        return NextResponse.json(data);
      } catch (er) {
        console.log('UPS  GET POST');
      }
    case 'POST':
      try {
        const body = await req.json();
        const data = await addPost(body);
        return NextResponse.json(data)
      } catch (er) {
        console.log('UPS ADD');
      }
  }
};

export { handler as GET, handler as POST };
