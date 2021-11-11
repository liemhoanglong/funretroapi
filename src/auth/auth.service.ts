import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
const bcrypt = require('bcrypt');

import { usersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: usersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user) {
      const check = await bcrypt.compare(pass, user.pass)
      if(check){
        const result = user;
        return result;
      }
    }
    return null;
  }
  
  async login(user: any) {
    const payload = { username: user.fullname, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
      user: user,
    };
  }
}
