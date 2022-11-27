import { PartialType } from '@nestjs/mapped-types';
import { IsOptional } from 'class-validator';
import { CreateUserDto } from './createUserDto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsOptional()
    username: string;

    @IsOptional()
    email: string;

    @IsOptional()
    password: string;
}