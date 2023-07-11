import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

export  async function POST(req) {
  const { fullname, email, password } = await req.json();

  if (!password || password.length < 6) {
    return NextResponse.json(
      {
        message: 'Password must be at least 6 characters',
      },
      { status: 400 }
    );
      
  }
  try {
    await dbConnect();
    const userFound = await User.findOne({ email });
    if (userFound) {
      return NextResponse.json(
        { message: 'Email alredy exist' },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({ email, fullname, password: hashedPassword });
    const savedUser=await user.save();

    return NextResponse.json(savedUser)
  } catch (error) {console.log(error);
  if (error instanceof Error) {
    return NextResponse.json({
      message :error.message
    },{status:400,})
  }}
}
