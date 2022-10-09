import { PartialType } from "@nestjs/mapped-types";
import { TodoStatusEnum } from "src/todo/todoEnum";
import { AddTodoDto } from "./addTodoDto";

export class UpdateTodoDto extends PartialType (AddTodoDto) 
{
    status : TodoStatusEnum;
}