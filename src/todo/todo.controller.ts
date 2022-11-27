import { Controller, Body, Param, Get, Post, Delete, Put } from '@nestjs/common';
import { TodoModel } from '../todo/todoModel';
import { AddTodoDto } from '../todo/dto/addTodoDto';
import { UpdateTodoDto } from "../todo/dto/updateTodoDto";
import { TodoService } from "../todo/todo.service";

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getTodos():TodoModel[] {
    return this.todoService.getTodos();
  }

  @Post()
  addTodo(@Body() todoDto: AddTodoDto):TodoModel {
    return this.todoService.addTodo(todoDto);
  }

  @Get(':id')
  getTodo(@Param('id') id: string):TodoModel {
    return this.todoService.getTodo(id);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string):TodoModel {
    return this.todoService.deleteTodo(id);
  }

  @Put(':id')
  updateTodo(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto):TodoModel {
    return this.todoService.updateTodo(id, updateTodoDto);
  }
}