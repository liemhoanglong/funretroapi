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
  ) {
    const generatedId = await this.boardService.insertBoard(
      taskName,
      taskType,
      taskLike,
    );
    return { id: generatedId };
  }

  @Get()
  async getAllBoard() {
    const result = await this.boardService.getBoard();
    return result;
  }

  // @Get(':id')
  // getProduct(@Param('id') prodId: string) {
  //   return this.productsService.getSingleProduct(prodId);
  // }

  // @Patch(':id')
  // updateProduct(
  //   @Param('id') prodId: string,
  //   @Body('title') prodTitle: string,
  //   @Body('description') prodDesc: string,
  //   @Body('price') prodPrice: number,
  // ) {
  //   this.productsService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
  //   return null;
  // }

  // @Delete(':id')
  // removeProduct(@Param('id') prodId: string) {
  //     this.productsService.deleteProduct(prodId);
  //     return null;
  // }
}
