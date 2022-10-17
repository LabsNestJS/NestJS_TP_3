import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { TodoStatusEnum } from 'src/todo/todoEnum';
import { TimestampEntity } from 'src/todo/entity/timestampEntity';

@Entity('todo')
export class TodoEntity extends TimestampEntity {
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