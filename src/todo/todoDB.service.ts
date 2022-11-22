import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult } from 'typeorm/query-builder/result/UpdateResult';
import { TodoEntity } from './entity/todoEntity';
import { AddTodoDto } from './dto/AddTodoDto';
import { UpdateTodoDto } from './dto/updateTodoDto';
import { FindTodoDto } from './dto/findTodoDto';

@Injectable()
export class TodoDBService {
    softRestore: any;
    constructor(
        @InjectRepository(TodoEntity)
        private todoRepository: Repository<TodoEntity>) {}

    async addTodo(todoDto:AddTodoDto): Promise<TodoEntity> {
        return this.todoRepository.save(todoDto);
    }

    async updateTodo(updateTodoDto:UpdateTodoDto, id:string): Promise<TodoEntity> {
        const newTodo = await this.todoRepository.preload({ id, ...updateTodoDto });
        if (newTodo) {
            return this.todoRepository.save(newTodo);
        } 
        else {
            throw new NotFoundException('Todo not found to be updated!');
        }
    }

    async softDeleteTodo(id:string): Promise<UpdateResult> {
        const result = await this.todoRepository.softDelete(id);
        if (result.affected) {
            return result;
        }
        throw new NotFoundException('Todo not found already!');
    }

    async restoreTodo(id:string) {
        const result = await this.todoRepository.restore(id);
        if (result.affected) {
            return result;
        }
        throw new NotFoundException('Todo not found!');
    }

    async countByStatus(){
        const qb=this.todoRepository.createQueryBuilder('todo');
        qb.select('todo.status, COUNT(todo.status) as count');
        qb.groupBy('todo.status');
        return qb.getRawMany();
    }

    async getTodos(): Promise<TodoEntity[]> {
        return await this.todoRepository.find();
    }

    pagination(data: [any, any],page: number,limit: number) {
        const [result,total]=data;
        const lastPage = Math.ceil(total/limit);
        const nextPage = page+1>lastPage?null:page+1;
        const previousPage = page-1<1?null:page-1;
        return {
          statusCode: 'success',
          data: [...result],
          count: total,
          currentPage: page,
          nextPage: nextPage,
          previousPage: previousPage,
          lastPage: lastPage,
        }
    }

    async findByCriterias(findTodoDto?:FindTodoDto){
        const take=findTodoDto.take || 2;
        const page=findTodoDto.page || 1;
        const skip=(page-1)*take;
        let data:any;
        if (findTodoDto.statut || findTodoDto.texte){
            const qb=this.todoRepository.createQueryBuilder('todo');
            if (findTodoDto.statut) {
                qb.andWhere('todo.status LIKE :statut', {statut: findTodoDto.statut});
            }
            if (findTodoDto.texte) {
                qb.andWhere('todo.name LIKE :texte OR todo.description LIKE :texte', {texte: `%${findTodoDto.texte}%`});
            }
            qb.skip(skip);
            qb.take(take);
            const [result,total]=await qb.getManyAndCount();
            data = [result,total];
        } 
        else {
            data = await this.todoRepository.findAndCount({order:{createdAt:'DESC'}, take:take, skip:skip});
        }
        return this.pagination(data,page,take); 
    }

    async getTodoById(id: string){
        const item=await this.todoRepository.findOne({where: {id:id}});
        if (!item) {
            throw new NotFoundException('Todo not found!');
        }
        return item;
    }
}