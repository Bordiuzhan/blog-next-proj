import { NextResponse } from 'next/server';
import handlerPosts from './handlerPost';
import { Notify } from 'notiflix';

const getHandler = async (req) => {
  const { method } = req;
  try {
    const data = await handlerPosts();
    if (!data) throw new Error("Unable to fetch posts");
    return NextResponse.json( data );
  } catch (er) {
    console.log("UPS");
  }
};



export { getHandler as GET };

// export async function postHandler(req) {
//   const { method } = req;
//   if (method === 'POST') {
//     // Логіка обробки POST запиту тут
//   }
//   return NextResponse.json();
// }



// export default async function handler(req, res) {
//   const { method } = req;
//   console.log(method);
//   switch (method) {
//     case 'GET':
//       try {
//         console.log('Connecting DB');
//         await dbConnect();
//         console.log('DB connected');
//         const posts = await Posts.find({});
//         req.status(200).json(posts);
//       } catch (error) {
//         req.status(400).json({ success: false });
//       }
//       break;
//     case 'POST':
//       try {
//         const post = await Posts.create(req.body);
//         res.status(201).json({ success: true, data: post });
//       } catch (error) {
//         res.status(400).json({ success: false });
//       }
//       break;
//     default:
//       res.status(400).json({ success: false });
//       break;
//   }
// }
