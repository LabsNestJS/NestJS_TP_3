import { PartialType } from "@nestjs/mapped-types";
import { IsOptional, IsEnum, MaxLength, MinLength, ValidationArguments } from "class-validator";
import { AddTodoDto } from "./addTodoDto";
import { TodoStatusEnum } from "src/todo/todoEnum";

export class UpdateTodoDto extends PartialType (AddTodoDto) 
{
    @IsOptional()
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
    name?: string;

    @IsOptional()
    @MinLength(10, { 
        message: (validationData: ValidationArguments) => {
          return `The size of your ${validationData.property} ${validationData.value} is short, the minimum size of ${validationData.property} is ${validationData.constraints[0]}`
        }
        })
    description?: string;

    @IsOptional()
    createdAt?: string;
    
    @IsOptional()
    @IsEnum(TodoStatusEnum)
    status: TodoStatusEnum;
}