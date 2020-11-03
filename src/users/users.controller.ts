import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

import { usersService } from './users.service';

@Controller('users')
export class userController {
  constructor(private readonly userService: usersService) {}

  @Post()
  async adduser(
    @Body('email') email: string,
    @Body('pass') pass: string,
    @Body('fullname') fullname: string,
  ) {
    const generatedId = await this.userService.insertUser(
      email,
      pass,
      fullname,
    );
    return { id: generatedId };
  }

  @Get()
  async getAllUser() {
    const result = await this.userService.getAllUser();
    return result;
  }

  @Get(':id')
  async getProduct(@Param('id') id: string) {
    const result = await this.userService.getUser(id);
    return result;
  }

  @Patch(':id')
  async updateProduct(
    @Param('id') id: string,
    @Body('email') email: string,
    @Body('pass') pass: string,
    @Body('fullname') fullname: string,
  ) {
    await this.userService.updateUser(id, email, pass, fullname);
    return null;
  }

}
