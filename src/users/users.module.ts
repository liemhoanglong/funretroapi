import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { userSchema } from './user.model'
import { userController } from './users.controller';
import { usersService } from './users.service';
@Module({
    imports: [MongooseModule.forFeature([{ name: 'user', schema: userSchema }])],
    controllers: [userController],
    providers: [usersService],
})
export class usersModule {}
