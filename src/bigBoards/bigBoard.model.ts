import * as mongoose from 'mongoose';

export const bigBoardSchema = new mongoose.Schema({
  name: String,
  date: String,
  authorId: String,
});

export interface bigBoard {
  id: string;
  name: string;
  date: String;
  authorId: String;
}
