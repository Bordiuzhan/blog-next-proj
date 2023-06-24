import Posts from '@/models/Posts';
import dbConnect from '@/lib/dbConnect';


export default async function handlerPosts(){
    await dbConnect()
    const posts = await Posts.find();
    return posts
    
}

 async function addPosts(data){
    await dbConnect()
    const post = await Posts.create(data);
    return post
    
}

