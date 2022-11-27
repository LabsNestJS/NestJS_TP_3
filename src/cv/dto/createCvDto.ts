import { IsOptional } from 'class-validator';

export class CreateCvDto {
    id: string;
    
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