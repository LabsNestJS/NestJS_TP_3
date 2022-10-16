import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremierModule } from './premier/premier.module';
import { PremierController } from './premier/premier.controller';
import { TodoModule } from './todo/todo.module';
import { TodoController } from './todo/todo.controller';
import { TodoService } from './todo/todo.service';
import { CommonModule } from './todo/commonModule/commonModule';
import { GenerateIDService } from './todo/commonModule/commonModule.service';
import { TodoEntity } from './todo/entity/todoEntity';

@Module({
  imports: [PremierModule, TodoModule, CommonModule, TodoEntity, TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "NestJS",
    entities: [TodoEntity],
    synchronize: true,
    logging: true,
  })],
  controllers: [AppController, PremierController, TodoController],
  providers: [AppService, TodoService, GenerateIDService],
})
export class AppModule {}
