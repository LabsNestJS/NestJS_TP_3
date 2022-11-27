import { PartialType } from '@nestjs/mapped-types';
import { IsOptional } from 'class-validator';
import { CreateSkillDto } from '../../skill/dto/createSkillDto';

export class UpdateSkillDto extends PartialType(CreateSkillDto) {
    @IsOptional()
    designation: string;
}