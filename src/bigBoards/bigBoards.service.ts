import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { type } from 'os';

import { bigBoard } from './bigBoard.model';

@Injectable()
export class bigBoardsService {
  private bigBoard: bigBoard[] = [];

  constructor(@InjectModel('bigBoard')  private readonly bigBoardModle: Model<bigBoard>) {}

  async insertBigBoard(name: string, date: string, authorId: string) {
    const newBigBoard = new this.bigBoardModle({name, date, authorId});
    const result = await newBigBoard.save();
    // console.log(result);
    return result.id as string;
  }

  async getAllBigBoard() {
    const result = await this.bigBoardModle.find().exec();
    // console.log(result);
    return result as bigBoard[];
  }

  async getBigBoard(id: string) {
    const result = await this.findBigBoard(id);
    return result;
  }

  async updateBigBoard(id: string, name: string, date: string, authorId: string) {
    const updateResult = await this.findBigBoard(id);
    if (id) {
      updateResult.id = id;
    }
    if (name) {
      updateResult.name = name;
    }
    if (date) {
      updateResult.date = date;
    }
    if (authorId) {
      updateResult.authorId = authorId;
    }
    updateResult.save();
  }

  async deleteBigBoard(id: string) {
    await this.bigBoardModle.findById(id).remove().exec();
  }

  private async findBigBoard(id: string): Promise<bigBoard> {
    let result;
    try {
      result = await this.bigBoardModle.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find bigBoard: ' + id);
    }
    if (!result) {
      throw new NotFoundException('Could not find bigBoard: ' + id);
    }
    return result;
  }
}

// "_id": "5f982ac1234e3f121c3b2155",
//         "name": "Web",
//         "date": "27/10/2020",
//         "authorId": "5f981b31face1e2ddb883a4c",
//         "__v": 0