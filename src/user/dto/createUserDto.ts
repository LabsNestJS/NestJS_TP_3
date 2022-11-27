import {IsNotEmpty,IsOptional} from "class-validator";

export class CreateUserDto {
    id: string;
   
    @IsNotEmpty()
    username: string;
   
    @IsOptional()
    email: string;

    @IsNotEmpty()
    password: string;
}