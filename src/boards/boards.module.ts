import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { boardSchema } from './board.model'
import { boardController } from './boards.controller';
import { boardsService } from './boards.service';
@Module({
    imports: [MongooseModule.forFeature([{ name: 'board', schema: boardSchema }])],
    controllers: [boardController],
    providers: [boardsService],
})
export class boardsModule {}
