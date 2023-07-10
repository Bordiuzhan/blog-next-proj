import  { SchemaTypes,Schema,model, models } from 'mongoose';

const PostsSchema = new Schema({
  userId: {
    type:  String
    // required: true,
  },
  title: {
    type: String,
    required: [true,"Title is required"],
  },
  body: {
    type: String,
    required: [true,"Body is required"],
  },
}, { versionKey: false, timestamps: true });

const Posts = models.Posts ||model('Posts', PostsSchema);
export default Posts;
