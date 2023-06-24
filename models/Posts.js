import mongoose from 'mongoose';

const PostsSchema = new mongoose.Schema({
  userId: {
    type: Number,
    // required: true,
  },
  id: {
    type: Number,
    // required: true,
  },
  title: {
    type: String,
    // required: true,
  },
  body: {
    type: String,
    // required: true,
  },
});

const Posts = mongoose.models.Posts || mongoose.model('Posts', PostsSchema);
export default Posts;
