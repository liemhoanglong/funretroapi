import * as mongoose from 'mongoose';

export const bigBoardSchema = new mongoose.Schema({
  name: String,
  date: String,
  authorId: String,
});

export interface bigBoard extends mongoose.Document {
  id: string;
  name: string;
  date: string;
  authorId: string;
}
