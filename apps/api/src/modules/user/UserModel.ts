import bcrypt from 'bcryptjs';
import mongoose, { Document, Model, Schema } from 'mongoose';

import { PlaceSchema } from '../place/placeSchema';
import type { IPlace } from '../place/placeSchema';

export type IUser = {
  name: string;
  email: string;
  password: string;
  phoneNumber?: string;
  active: boolean;
  places: IPlace[];
  authenticate: (plainTextPassword: string) => Promise<boolean>;
  encryptPassword: (password: string | undefined) => Promise<string>;
} & Document;

const schema = new Schema<IUser>({
  name: {
    type: String,
    trim: true,
    required: true,
    index: { unique: true },
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    require: false,
  },
  active: {
    type: Boolean,
    default: false,
    required: true,
  },
  places: {
    type: [PlaceSchema],
    required: false,
  },
}, { timestamps: true });

schema.pre<IUser>('save', function hashPassword(next) {
  // Hash the password
  if (this.isModified('password')) {
    if (this.password) {
      this.encryptPassword(this.password)
        .then((hash: string) => {
          this.password = hash;
          next();
        })
        .catch((err: Error) => next(err));
    } else {
      return next();
    }
  } else {
    return next();
  }
});

schema.methods = {
  async authenticate(plainText: string) {
    try {
      return await bcrypt.compare(plainText, this.password);
    } catch (err) {
      return false;
    }
  },
  encryptPassword(password: string) {
    return bcrypt.hash(password, 8);
  },
};

const UserModel: Model<IUser> = mongoose.model('User', schema);

export default UserModel;
