import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { TodoStatusEnum } from '../todoEnum';
import { TimestampEntity } from '../entity/timestampEntity';

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