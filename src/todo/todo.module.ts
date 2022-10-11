import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { GenerateIDService } from './commonModule/commonModule.service';

@Module({
  controllers: [TodoController],
  providers: [TodoService, GenerateIDService],
})
export class TodoModule {}
