import { Controller, Body, Param, Get, Post, Patch, Delete, Query } from '@nestjs/common';
import { UpdateResult } from 'typeorm/query-builder/result/UpdateResult';
import { TodoEntity } from './entity/todoEntity';
import { TodoDBService } from './todoDB.service';
import { AddTodoDto } from './dto/AddTodoDto';
import { UpdateTodoDto } from './dto/updateTodoDto';
import { FindTodoDto } from './dto/findTodoDto';
import { TodoStatusEnum } from './todoEnum';

@Controller('todoDB')
export class TodoDBController {
    constructor(private todoDBService: TodoDBService) {}

    @Post()
    addTodo(@Body() newTodo:AddTodoDto): Promise<TodoEntity> {
      return this.todoDBService.addTodo(newTodo);
    }

    @Patch(':id')
    updateTodo(@Body() updateTodoDto: UpdateTodoDto, @Param('id') id:string): Promise<TodoEntity> {
      return this.todoDBService.updateTodo(updateTodoDto,id);
    }
  
    @Delete(':id')
    softDeleteTodo(@Param('id') id:string): Promise<UpdateResult> {
      return this.todoDBService.softDeleteTodo(id);
    }

    @Get('/restore/:id')
    restoreTodo(@Param('id') id:string) {
      return this.todoDBService.restoreTodo(id);
    } 

    @Get('/count')
    countByStatus(): any {
      return this.todoDBService.countByStatus();
    }

    @Get('/all')
    getTodos(): Promise<TodoEntity[]> {
      return this.todoDBService.getTodos();
    }

    @Get('/criterias')
    findByCriterias(@Query() findTodoDto: FindTodoDto) {
      return this.todoDBService.findByCriterias(findTodoDto);
    }

    @Get('/id/:id')
    getTodoById(@Param('id') id:string) {
      return this.todoDBService.getTodoById(id);
    }
}