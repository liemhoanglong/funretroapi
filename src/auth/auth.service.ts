import { Injectable } from '@nestjs/common';
import { usersService } from '../users/users.service';
const bcrypt = require('bcrypt');
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: usersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user) {
      // console.log(pass);
      // console.log(user.pass);
      let check = await bcrypt.compare(pass, user.pass)
      // console.log("pass like? "+check)
      if(check){
        const result = user;
        // const { pass, ...result } = user;
        return result;
      }
    }
    return null;
  }
  
  async login(user: any) {
    // console.log(user.id);
    // console.log(user.email);
    const payload = { username: user.fullname, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
      user: user,
    };
  }
}
