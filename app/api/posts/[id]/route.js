import { NextResponse } from 'next/server';
import handlerPost from './handler';

const handler = async (req, { params}) => {
const {id}=await params;

  try {
    const data = await handlerPost(id);
    if (!data) throw new Error('Unable to fetch post');
    return NextResponse.json(data);
  } catch (er) {
    console.log('UPS');
  }
};

export { handler as GET };
