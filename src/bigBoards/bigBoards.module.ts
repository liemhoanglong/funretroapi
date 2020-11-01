import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { bigBoardSchema } from './bigBoard.model'
import { bigBoardController } from './bigBoards.controller';
import { bigBoardsService } from './bigBoards.service';
@Module({
    imports: [MongooseModule.forFeature([{ name: 'bigBoard', schema: bigBoardSchema }])],
    controllers: [bigBoardController],
    providers: [bigBoardsService],
})
export class bigBoardsModule {}
