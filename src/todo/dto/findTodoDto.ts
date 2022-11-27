import { IsEnum, IsOptional } from 'class-validator';
import { TodoStatusEnum } from '../../todo/todoEnum';

export class FindTodoDto {

  @IsOptional()
  texte?: string;
  
  @IsOptional()
  @IsEnum(TodoStatusEnum)
  statut?: string;

  take?: number;
  
  page?: number;
}