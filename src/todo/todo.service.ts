import { Injectable, NotFoundException } from '@nestjs/common';
import { TodoModel } from 'src/todo/todoModel';
import { AddTodoDto } from 'src/todo/dto/addTodoDto';
import { UpdateTodoDto } from 'src/todo/dto/updateTodoDto';
import { TodoStatusEnum } from './todoEnum';
import { GenerateIDService } from 'src/todo/commonModule/commonModule.service'



@Injectable()
export class TodoService {
    constructor(private generateIDService: GenerateIDService){}
    private todos = [];

    getTodos(){
        if (this.todos.length==0) return ["You have nothing to do!"];
        return this.todos;
    }

    addTodo(todoDto:AddTodoDto){
        const _:TodoModel={
            id: this.generateIDService.generate(),
            name: todoDto.name,
            description: todoDto.description,
            createdAt: Date(),
            status: TodoStatusEnum.waiting
        }
        this.todos.push(_);
        return todoDto;

    }

    getTodo(id:string){
        var obj=this.todos.find(x=> x.id==id);
        if (!obj) throw new NotFoundException('Todo not found!');
        return  obj;
    } 

    deleteTodo(id:string):any {
        var arr = this.todos.filter(x=> x.id!=id);
        if (arr.length!=this.todos.length) 
        {this.todos=arr;
        return arr;}
        else throw new NotFoundException('Todo not found already!');
    } 

    updateTodo(id: string, updateTodoDto:UpdateTodoDto):any {
        var obj= this.todos.find(x=> x.id==id);
        if (!obj) throw new NotFoundException('Todo not found to be updated!');
        obj.name= updateTodoDto.name??obj.name;
        obj.description=  updateTodoDto.description ?? obj.description;
        obj.status= updateTodoDto.status??obj.status;
        return this.todos;
    } 
}