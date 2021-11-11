import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { board } from './board.model';

@Injectable()
export class boardsService {
  constructor(@InjectModel('board')  private readonly boardModle: Model<board>) {}

  async insertBoard(name: string, type: number, like: number, boardId: string) {
    const newBoard = new this.boardModle({name, type, like, boardId});
    const result = await newBoard.save();
    // console.log(result);
    return result.id as string;
  }

  async getAllBoard() {
    const result = await this.boardModle.find().exec();
    // console.log(result);
    return result as board[];
  }

  async getAllBoardByBoardId(boardId: string) {
    const result = await this.boardModle.find({boardId: boardId}).exec();
    // console.log(result);
    return result as board[];
  }

  async getBoard(id: string) {
    const result = await this.findBoard(id);
    return result;
  }

  async updateBoard(id: string, name: string, type: number, like: number) {
    const updateResult = await this.findBoard(id);
    if (name) {
      updateResult.name = name;
    }
    if (type) {
      updateResult.type = type;
    }
    if (like) {
      updateResult.like = like;
    }
    updateResult.save();
  }

  async deleteBoard(id: string) {
    await this.boardModle.findById(id).remove().exec();
  }

  private async findBoard(id: string): Promise<board> {
    let result;
    try {
      result = await this.boardModle.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find bigBoard: ' + id);
    }
    if (!result) {
      throw new NotFoundException('Could not find bigBoard: ' + id);
    }
    return result;
  }
}
