import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremierModule } from './premier/premier.module';
import { TodoModule } from './todo/todo.module';
import { CommonModule } from './todo/commonModule/commonModule';
import { DiversModule } from './divers/divers.module';
import { TodoEntity } from './todo/entity/todoEntity';


@Module({
  imports: [PremierModule, TodoModule, CommonModule, DiversModule, TodoEntity, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1329566',
    database: 'nestjs',
    entities: [TodoEntity],
    synchronize: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
