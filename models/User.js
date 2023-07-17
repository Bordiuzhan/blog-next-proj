import { SchemaTypes, Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'Email is required'],
  },
  password: {
    type: String,
    unique: true,
    required: [true, 'Password is required'],
    select:false,
  },

  name: {
    type: String,
    unique: true,
    required: [true, 'Name is required'],
    minLength: [3, 'Name must be at least 3 characters'],
    maxLength: [50, 'Name must be at most 50 characters'],
  },
});

const User = models.User || model('User', userSchema);
export default User;
