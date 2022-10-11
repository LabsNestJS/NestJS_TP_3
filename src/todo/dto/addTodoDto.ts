import { IsNotEmpty, IsString, MaxLength, MinLength, ValidationArguments } from 'class-validator';
import { TodoStatusEnum } from 'src/todo/todoEnum';

export class AddTodoDto {
  id: string;
  
  @IsString()
  @IsNotEmpty({message: ()=>("'name' field is empty!")})
  @MinLength(3,{
    message: (validationData: ValidationArguments) => {
      return `The size of your ${validationData.property} ${validationData.value} is short, the minimum size of ${validationData.property} is ${validationData.constraints[0]}`
    }
    })
  @MaxLength(10, { 
    message: (validationData: ValidationArguments) => {
      return `The size of your ${validationData.property} ${validationData.value} is long, the maximum size of ${validationData.property} is ${validationData.constraints[0]}`
    }
    })
  name: string;

  @IsString()
  @IsNotEmpty({message: ()=>("'description' field is empty!")})
  @MinLength(10, { 
    message: (validationData: ValidationArguments) => {
      return `The size of your ${validationData.property} ${validationData.value} is short, the minimum size of ${validationData.property} is ${validationData.constraints[0]}`
    }
    })
  description: string;

  createdAt: string; 

  status: TodoStatusEnum;
}