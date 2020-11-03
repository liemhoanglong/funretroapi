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
    @Body('authorId') boardAuthorId: string,
  ) {
    const generatedId = await this.bigBoardService.insertBigBoard(
      boardName,
      boardAuthorId,
    );
    return { id: generatedId };
  }

  @Get()
  async getAllBigBoard() {
    const result = await this.bigBoardService.getAllBigBoard();
    return result;
  }

  @Get(':authorId')
  async getAllBoardByAuthorId(@Param('authorId') authorId: string) {
    const result = await this.bigBoardService.getAllBoardByAuthorId(authorId);
    return result;
  }

  @Get(':authorId/:id')
  async getBigBoard(@Param('id') Id: string) {
    const result = await this.bigBoardService.getBigBoard(Id);
    return result;
  }

  @Patch(':id')
  async updateBigBoard(
    @Param('id') id: string,
    @Body('name') name: string,
  ) {
    await this.bigBoardService.updateBigBoard(id, name);
    return null;
  }

  @Delete(':id')
  async removeProduct(@Param('id') id: string) {
      await this.bigBoardService.deleteBigBoard(id);
      return null;
  }
}
