import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

import { bigBoardsService } from './bigBoards.service';

@Controller('bigBoards')
export class bigBoardController {
  constructor(private readonly bigBoardService: bigBoardsService) {}

  @Post()
  async addBigBoard(
    @Body('name') boardName: string,
    @Body('date') boardDate: string,
    @Body('authorId') boardAuthorId: string,
  ) {
    const generatedId = await this.bigBoardService.insertBigBoard(
      boardName,
      boardDate,
      boardAuthorId,
    );
    return { id: generatedId };
  }

  @Get()
  async getAllBigBoard() {
    const result = await this.bigBoardService.getAllBigBoard();
    return result;
  }

  @Get(':id')
  async getBigBoard(@Param('id') Id: string) {
    const result = await this.bigBoardService.getBigBoard(Id);
    return result;
  }

  @Patch(':id')
  async updateBigBoard(
    @Param('id') id: string,
    @Body('name') name: string,
    @Body('date') date: string,
    @Body('authorId') authorId: string,
  ) {
    await this.bigBoardService.updateBigBoard(id, name, date, authorId);
    return null;
  }

  @Delete(':id')
  async removeProduct(@Param('id') id: string) {
      await this.bigBoardService.deleteBigBoard(id);
      return null;
  }
}
