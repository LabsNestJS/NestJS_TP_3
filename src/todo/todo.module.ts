import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { TodoEntity } from './entity/todoEntity';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { GenerateIDService } from './commonModule/commonModule.service';
import { TodoDBController } from './todoDB.controller';
import { TodoDBService } from './todoDB.service';

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntity])],
  controllers: [TodoController, TodoDBController],
  providers: [TodoService, GenerateIDService, TodoDBService],
})
export class TodoModule {}