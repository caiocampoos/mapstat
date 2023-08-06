import { Document, Model, Schema } from 'mongoose';
import mongoose from 'mongoose';


interface IUser {
    name: string;
    email: string;
    password: string
    phoneNumber?: string;
  }
  
  const schema = new Schema<IUser>({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password:{
        type: String,
        required: true,
    },
    phoneNumber: {
      type: String,
    },
  });
  




const UserModel: Model<IUser> = mongoose.model('User', schema);

export default UserModel;
