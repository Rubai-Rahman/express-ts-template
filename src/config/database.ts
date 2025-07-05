import mongoose from 'mongoose';
import { environment } from './environment';

export const connectDB = async () => {
  try {
    await mongoose.connect(environment.mongoUri);
    console.log('MongoDB connected...');
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};
