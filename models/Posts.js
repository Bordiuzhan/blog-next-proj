import mongoose, { SchemaTypes } from 'mongoose';

const PostsSchema = new mongoose.Schema({
  userId: {
    type:  String
    // required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
}, { versionKey: false, timestamps: true });

const Posts = mongoose.models.Posts || mongoose.model('Posts', PostsSchema);
export default Posts;
