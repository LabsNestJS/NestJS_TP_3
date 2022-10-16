import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { TodoStatusEnum } from 'src/todo/todoEnum';
import { TiemstampEntity } from 'src/todo/entity/tiemstampEntity';

@Entity('todo')
export class TodoEntity extends TiemstampEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({})
  name: string;

  @Column({})
  description: string;

  @Column({
    type: 'enum',
    enum: TodoStatusEnum,
    default: TodoStatusEnum.waiting,
  })
  status: TodoStatusEnum = TodoStatusEnum.waiting;
}