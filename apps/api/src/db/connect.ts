import 'dotenv/config';
import mongoose from 'mongoose';
import type { ConnectOptions } from 'mongoose';

export const MONGO_URI = process.env['MONGO_URI'] || '';

export const connectDB = async (options: ConnectOptions) => {
  
    try {
      // eslint-disable-next-line no-console
      console.log('MONGO_URI: ', MONGO_URI);
      await mongoose.connect(MONGO_URI, options);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log('mongoose connect try catch: ', err);
    }
  };
