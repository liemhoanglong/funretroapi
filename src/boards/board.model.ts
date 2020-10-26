import * as mongoose from 'mongoose';

export const boardSchema = new mongoose.Schema({
  name: String,
  type: Number,
  like: Number,
});

export interface board {
  id: string;
  name: string;
  type: number;
  like: number;
}
