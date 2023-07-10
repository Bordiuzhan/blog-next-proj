import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

const dbConnect = async () => {
  try {
    const { connection } = await mongoose.connect(MONGODB_URI);
    if (connection.readyState === 1) {
      console.log('MongoDB conected');
      return Promise.resolve(true);
    }
  } catch (error) {console.log(error);
  return Promise.reject(false)}
};

export default dbConnect;
