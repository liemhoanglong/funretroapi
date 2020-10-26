import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { boardController } from './boards.controller';
import { boardsService } from './boards.service';
import { boardSchema } from './board.model'
@Module({
    imports: [MongooseModule.forFeature([{ name: 'board', schema: boardSchema }])],
    controllers: [boardController],
    providers: [boardsService],
})
export class boardsModule {}
