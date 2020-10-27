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
    const result = await this.bigBoardService.getBigBoard();
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
