import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entity/userEntity';
import { Cv } from '../cv/entity/cvEntity';
import { CvService } from '../cv/cv.service';
import { CvController } from '../cv/cv.controller';
import { Skill } from '../skill/entity/skillEntity';
import { SkillService } from '../skill/skill.service';


@Module({
  imports: [TypeOrmModule.forFeature([Cv,Skill,User])],
  controllers: [CvController],
  providers: [CvService,SkillService]
})
export class CvModule {}