import mongoose, { SchemaTypes } from 'mongoose';

const PostsSchema = new mongoose.Schema({
  // userId: {
  //   type:  SchemaTypes.ObjectId,
  //   // required: true,
  // },
  _id:{
    type:  SchemaTypes.ObjectId,
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
