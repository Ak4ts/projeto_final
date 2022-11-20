import { Schema, model, Document } from "mongoose";

interface UserInterface extends Document {
  email?: string;
  username?: string;
  password?: string;
  token?: string;
  _id?: string;
}

export const UserSchema = new Schema({ 
  email: String,
  username: String,
  password: String,
  token: String,
}, {
  timestamps: true
})

export default model<UserInterface>('User', UserSchema)