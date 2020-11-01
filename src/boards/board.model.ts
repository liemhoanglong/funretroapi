import * as mongoose from 'mongoose';

export const boardSchema = new mongoose.Schema({
  name: String,
  type: Number,
  like: Number,
  boardId: String,
});

export interface board extends mongoose.Document {
  id: string;
  name: string;
  type: number;
  like: number;
  boardId: string;
}
