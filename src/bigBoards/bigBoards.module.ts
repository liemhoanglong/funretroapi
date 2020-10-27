import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { bigBoardController } from './bigBoards.controller';
import { bigBoardsService } from './bigBoards.service';
import { bigBoardSchema } from './bigBoard.model'
@Module({
    imports: [MongooseModule.forFeature([{ name: 'bigBoard', schema: bigBoardSchema }])],
    controllers: [bigBoardController],
    providers: [bigBoardsService],
})
export class bigBoardsModule {}
