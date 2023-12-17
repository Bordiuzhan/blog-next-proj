import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Posts from '@/models/Posts';

const handler = async (req, { params }) => {
  const { id } = await params;

  try {
    await dbConnect();
    const post = await Posts.findById(id);

    if (!post)
      return NextResponse.json(
        {
          message: 'Unable to fetch post',
        },
        { status: 400 }
      );

    return NextResponse.json(post);
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
