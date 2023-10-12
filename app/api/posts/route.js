import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Posts from '@/models/Posts';
import { getServerSession } from 'next-auth';
import { authConfig } from '@/config/auth';

const handler = async (req) => {
  const { method } = req;

  try {
    await dbConnect();

    if (method === 'GET') {
      const posts = await Posts.find();
      return NextResponse.json(posts || 'Unable to fetch posts');
    }

    if (method === 'POST') {
      const { title, body } = await req.json();
      const session = await getServerSession(authConfig);

      if (!session) {
        return NextResponse.status(401);
      }

      const post = { title, body, owner: session.user.email };
      const newPost = await Posts.create(post);
      return NextResponse.json(newPost);
    }
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
};

export { handler as GET, handler as POST };
