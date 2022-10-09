import { Injectable, NotFoundException } from '@nestjs/common';
import { TodoModel } from 'src/todo/todoModel';
import { AddTodoDto } from 'src/todo/dto/addTodoDto';
import { UpdateTodoDto } from 'src/todo/dto/updateTodoDto';

@Injectable()
export class TodoService {
    private todos = [];

    getTodos():TodoModel[] {
      return this.todos;
    }

    addTodo(todoDto: AddTodoDto):TodoModel {
        const todo = new TodoModel();
        todo.name = todoDto.name;
        todo.description = todoDto.description;
        this.todos.push(todo);
        return todo;
    }

    getTodo(id):any {
        var obj=this.todos.find(x=> x.id==id);
        if (!obj) throw new NotFoundException('Todo not found');
        return  obj;
    } 

    deleteTodo(id):any {
        var arr = this.todos.filter(x=> x.id!=id);
        if (arr.length!=this.todos.length) 
        {this.todos=arr;
        return arr;}
        else throw new NotFoundException('Todo not found already');
    } 

    updateTodo(updateTodoDto:UpdateTodoDto):any {
        var obj= this.todos.find(x=> x.id==x.id)
        if (!obj) throw new NotFoundException('Todo not found to be updateed');
        obj.name= updateTodoDto.name??obj.name;
        obj.description=  updateTodoDto.description ?? obj.description;
        obj.status= updateTodoDto.status??obj.status;
        return this.todos;
    } 
}