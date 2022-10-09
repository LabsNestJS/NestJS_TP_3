import { TodoStatusEnum } from './todoEnum';
import { v4 as uuidv4 } from 'uuid';

export class TodoModel {
  id: string = uuidv4();
  name: string;
  description: string;
  createdAt: string = Date();
  status: TodoStatusEnum = TodoStatusEnum.waiting;
}