import  { SchemaTypes,Schema,model, models } from 'mongoose';

const PostsSchema = new Schema({
  title: {
    type: String,
    required: [true,"Title is required"],
  },
  body: {
    type: String,
    required: [true,"Body is required"],
  },
  owner: {
    type: String,
    ref: 'User',
  }
}, { versionKey: false, timestamps: true });

const Posts = models.Posts ||model('Posts', PostsSchema);
export default Posts;
