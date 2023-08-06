import 'dotenv/config';
import mongoose from 'mongoose';
import type { ConnectOptions } from 'mongoose';

const MONGO_URI = process.env.MONGO_URI || '';

export const connectDB = async (options: ConnectOptions) => {
  
    try {
      console.log('MONGO_URI: ', MONGO_URI);
      await mongoose.connect(MONGO_URI, options);
    } catch (err) {
      // eslint-disable-next-line
      console.log('mongoose connect try catch: ', err);
    }
  };