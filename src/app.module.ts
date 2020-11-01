import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { bigBoardsModule } from './bigBoards/bigBoards.module';
import { boardsModule } from './boards/boards.module';

@Module({
  imports: [
    bigBoardsModule, 
    boardsModule,
    MongooseModule.forRoot(
      'mongodb+srv://user:user@cluster0.6spzr.mongodb.net/retro?retryWrites=true&w=majority'
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
