import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SkillService } from '../skill/skill.service';
import { CreateSkillDto } from '../skill/dto/createSkillDto';
import { UpdateSkillDto } from '../skill/dto/updateSkillDto';

@Controller('skill')
export class SkillController {
  constructor(private readonly skillService: SkillService) {}

  @Post()
  addSkill(@Body() createSkillDto: CreateSkillDto) {
    return this.skillService.addSkill(createSkillDto);
  }

  @Get(':id')
  getSkill(@Param('id') id: string) {
    return this.skillService.getSkill(id);
  }

  @Get()
  getSkills() {
    return this.skillService.getSkills();
  }

  @Patch(':id')
  updateSkill(@Param('id') id: string, @Body() updateSkillDto: UpdateSkillDto) {
    return this.skillService.updateSkill(id, updateSkillDto);
  }

  @Delete(':id')
  deleteSkill(@Param('id') id: string) {
    return this.skillService.deleteSkill(id);
  }
}