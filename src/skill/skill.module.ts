import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cv } from '../cv/entity/cvEntity';
import { Skill } from '../skill/entity/skillEntity';
import { SkillService } from '../skill/skill.service';
import { SkillController } from '../skill/skill.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Skill,Cv])],
  controllers: [SkillController],
  providers: [SkillService]
})
export class SkillModule {}