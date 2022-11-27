import { PartialType } from '@nestjs/mapped-types';
import { IsOptional } from 'class-validator';
import { CreateCvDto } from '../../cv/dto/createCvDto';

export class UpdateCvDto extends PartialType(CreateCvDto) {
    @IsOptional()
    name: string;

    @IsOptional()
    firstname: string;

    @IsOptional()
    age: number;

    @IsOptional()
    cin: string;

    @IsOptional()
    job: string;

    @IsOptional()
    path: string;
}