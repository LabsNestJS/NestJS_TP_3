import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremierModule } from './premier/premier.module';
import { PremierController } from './premier/premier.controller';
import { TodoModule } from './todo/todo.module';
import { TodoController } from './todo/todo.controller';
import { TodoService } from './todo/todo.service';
import { CommonModule } from './todo/commonModule/commonModule';
import { GenerateIDService } from './todo/commonModule/commonModule.service';

@Module({
  imports: [PremierModule, TodoModule, CommonModule],
  controllers: [AppController, PremierController, TodoController],
  providers: [AppService, TodoService, GenerateIDService],
})
export class AppModule {}
