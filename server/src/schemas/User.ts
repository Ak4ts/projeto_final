import { Schema, model, Document } from "mongoose";

interface UserInterface extends Document {
  email?: string;
  username?: string;
  password?: string;
  token?: string;
  location?: string;
  bio?: string;
  interests?: string;
  friends?: object;
  _id?: string;
}

export const UserSchema = new Schema(
  {
    email: String,
    username: String,
    password: String,
    token: String,
    location: String,
    bio: String,
    interests: String,
    friends: Object
  },
  {
    timestamps: true,
  }
);

export default model<UserInterface>("User", UserSchema);
