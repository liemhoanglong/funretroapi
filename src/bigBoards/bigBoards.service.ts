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

  async getBigBoard() {
    const result = await this.bigBoardModle.find().exec();
    // console.log(result);
    return result as bigBoard;
  }

  // getSingleProduct(productId: string) {
  //   const product = this.findProduct(productId)[0];
  //   return { ...product };
  // }

  // updateProduct(productId: string, title: string, desc: string, price: number) {
  //   const [product, index] = this.findProduct(productId);
  //   const updatedProduct = { ...product };
  //   if (title) {
  //     updatedProduct.title = title;
  //   }
  //   if (desc) {
  //     updatedProduct.description = desc;
  //   }
  //   if (price) {
  //     updatedProduct.price = price;
  //   }
  //   this.products[index] = updatedProduct;
  // }

  // deleteProduct(prodId: string) {
  //     const index = this.findProduct(prodId)[1];
  //     this.products.splice(index, 1);
  // }

  // private findProduct(id: string): [Product, number] {
  //   const productIndex = this.products.findIndex(prod => prod.id === id);
  //   const product = this.products[productIndex];
  //   if (!product) {
  //     throw new NotFoundException('Could not find product.');
  //   }
  //   return [product, productIndex];
  // }
}
