import { Controller, Body, Param, Get, Post, Delete, Put } from '@nestjs/common';
import { TodoModel } from 'src/todo/todoModel';
import { AddTodoDto } from 'src/todo/dto/addTodoDto';
import { UpdateTodoDto } from "src/todo/dto/updateTodoDto";
import { TodoService } from "src/todo/todo.service";

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  getTodos():TodoModel[] {
    return this.todoService.getTodos();
  }

  @Post()
  addTodo(@Body() todoDto: AddTodoDto):TodoModel {
    return this.todoService.addTodo(todoDto);
  }

  @Get(':id')
  getTodo(@Param('id') id):any {
    return this.todoService.getTodo(id);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id):any {
    return this.todoService.deleteTodo(id);
  }

  @Put(':id')
  updateTodo(@Body() updateTodoDto: UpdateTodoDto):any {
    return this.todoService.updateTodo(updateTodoDto);
  }
}