import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
  email: String,
  pass: String,
  fullname: String
});

export interface user extends mongoose.Document {
  id: string;
  email: string;
  pass: String;
  fullname: String
}
