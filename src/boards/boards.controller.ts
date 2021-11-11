import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

import { boardsService } from './boards.service';

@Controller('boards')
export class boardController {
  constructor(private readonly boardService: boardsService) {}

  @Post()
  async addBoard(
    @Body('name') taskName: string,
    @Body('type') taskType: number,
    @Body('like') taskLike: number,
    @Body('boardId') taskboardId: string,
  ) {
    const generatedId = await this.boardService.insertBoard(
      taskName,
      taskType,
      taskLike,
      taskboardId,
    );
    return { id: generatedId };
  }

  @Get()
  async getAllBoard() {
    const result = await this.boardService.getAllBoard();
    return result;
  }

  @Get(':boardId')
  async getAllBoardByBoardId(@Param('boardId') boardId: string) {
    const result = await this.boardService.getAllBoardByBoardId(boardId);
    return result;
  }

  // @Get(':id')
  // async getBoard(@Param('id') id: string) {
  //   const result = await this.boardService.getBoard(id);
  //   return result;
  // }

  @Patch(':id')
  async updateBoard(
    @Param('id') id: string,
    @Body('name') name: string,
    @Body('type') type: number,
    @Body('like') like: number,
  ) {
    await this.boardService.updateBoard(id, name, type, like);
    return null;
  }

  @Delete(':id')
  async removeBoard(@Param('id') prodId: string) {
      await this.boardService.deleteBoard(prodId);
      return null;
  }
}
