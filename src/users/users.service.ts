import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { type } from 'os';
import { user } from './user.model';
const bcrypt = require('bcrypt');

@Injectable()
export class usersService {
  private user: user[] = [];

  constructor(@InjectModel('user')  private readonly userModle: Model<user>) {}

  async insertUser(email: string, pass: string, fullname: string) {
    const newUser = new this.userModle({email, pass, fullname});

    bcrypt.hash(pass, 8, function(err, hash) {
      newUser.pass = hash;
      // console.log(hash)
      newUser.save();
      // bcrypt.compare("123", newUser.pass, function(err, result) {
      //   console.log(result)
      // });
    });
  }

  async getAllUser() {
    const result = await this.userModle.find().exec();
    // console.log(result);
    return result as user[];
  }

  async getUser(id: string) {
    const result = await this.findUser(id);
    return result;
  }

  async findOne(email: string) {
    let result;
    try {
      result = await this.userModle.findOne({ email: email }).exec();
    } catch (error) {
      throw new NotFoundException('Could not find user: ' + email);
    }
    if (!result) {
      throw new NotFoundException('Could not find user: ' + email);
    }
    return result;
  }

  async updateUser(id:string, email: string, pass: string, fullname: string) {
    const updateResult = await this.findUser(id);
    if (email) {
      updateResult.email = email;
    }
    if (fullname) {
      updateResult.fullname = fullname;
    }
    if (pass) {
      bcrypt.hash(pass, 8, function(err, hash) {
        updateResult.pass = hash;
        console.log(hash)
        updateResult.save();
        // bcrypt.compare("lan123", updateResult.pass, function(err, result) {
        //   console.log(result)
        // });
        return null;
      });
    }
    updateResult.save();
    return null;
  }

  private async findUser(id: string): Promise<user> {
    let result;
    try {
      result = await this.userModle.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find user: ' + id);
    }
    if (!result) {
      throw new NotFoundException('Could not find user: ' + id);
    }
    return result;
  }
}


