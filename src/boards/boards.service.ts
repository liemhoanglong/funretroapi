import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { type } from 'os';

import { board } from './board.model';

@Injectable()
export class boardsService {
  private board: board[] = [];

  constructor(@InjectModel('board')  private readonly boardModle: Model<board>) {}

  async insertBoard(name: string, type: number, like: number) {
    const newBoard = new this.boardModle({name, type, like});
    const result = await newBoard.save();
    // console.log(result);
    return result.id as string;
  }

  async getBoard() {
    const result = await this.boardModle.find().exec();
    // console.log(result);
    return result as board;
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
