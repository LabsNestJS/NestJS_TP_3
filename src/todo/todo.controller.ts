import { Controller, Body, Param, Get, Post, Delete, Put } from '@nestjs/common';
import { TodoModel } from 'src/todo/todoModel';
import { AddTodoDto } from 'src/todo/dto/addTodoDto';
import { UpdateTodoDto } from "src/todo/dto/updateTodoDto";

@Controller('todo')
export class TodoController {
  private todos = [];

  @Get()
  getTodos() {
    return this.todos;
  }

  @Post()
  addTodo(@Body() todoDto: AddTodoDto) {
    const todo = new TodoModel();
    todo.name = todoDto.name;
    todo.description = todoDto.description;
    this.todos.push(todo);
    return todo;
  }

  @Get(':id')
  getTodo(@Param('id') id) {
    return this.todos.find((todo) => todo.id == id);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id) {
    this.todos = this.todos.filter((todo) => todo.id != id);

    return 'Data deleted successfully';
  }

  @Put(':id')
  updateTodo(@Param('id') id, @Body() updateTodoDto: UpdateTodoDto) {
    const todo = this.todos.find((todo) => todo.id == id);
    if (updateTodoDto.name) {
      todo.name = updateTodoDto.name;
    }
    if (updateTodoDto.description) {
      todo.description = updateTodoDto.description;
    }
    if (updateTodoDto.status) {
      todo.status = updateTodoDto.status;
    }
    return todo;
  }
}