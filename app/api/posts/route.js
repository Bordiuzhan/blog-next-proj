import { NextResponse } from 'next/server';

import dbConnect from '@/lib/dbConnect';
import Posts from '@/models/Posts';
import { getServerSession } from 'next-auth';
import { authConfig } from '@/config/auth';
import mongoose from 'mongoose';

const handler = async (req) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        await dbConnect();
        const posts = await Posts.find();
        if (!posts) return NextResponse.json('Unable to fetch posts');
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
    case 'POST':
      try {
        const { title, body,email } = await req.json();
        const session = await getServerSession(authConfig);

        if (session) {
          
          console.log(session);
          const post = { title, body, owner: session.user.email };
console.log("POST",post);
          await dbConnect();
          const newPost = await Posts.create(post);

          return NextResponse.json(newPost);
        } else {
          NextResponse.status(401);
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
  }
};

export { handler as GET, handler as POST };
