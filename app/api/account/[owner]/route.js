import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Posts from '@/models/Posts';

const handler = async (req, { params }) => {
  const { owner } = params;

  try {
    await dbConnect();
    const posts = await Posts.find({ owner });

    if (!posts) {
      return NextResponse.json(
        {
          message: 'Unable to fetch posts',
        },
        { status: 400 }
      );
    }

    return NextResponse.json(posts);
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

export { handler as GET };
