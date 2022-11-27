import { Controller, Body, Param, Get, Post, Patch, Delete } from '@nestjs/common';
import { CvService } from '../cv/cv.service';
import { CreateCvDto } from '../cv/dto/createCvDto';
import { UpdateCvDto } from '../cv/dto/updateCvDto';

@Controller('cv')
export class CvController {
  constructor(private readonly cvService: CvService) {}

  @Post(':id')
  addCv(@Body() createCvDto: CreateCvDto, id:string) {
    return this.cvService.addCv(createCvDto,id);
  }

  @Get(':id')
  getCv(@Param('id') id: string) {
    return this.cvService.getCv(id);
  }

  @Get()
  getCvs() {
    return this.cvService.getCvs();
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() updateCvDto: UpdateCvDto) {
      return this.cvService.updateCv(id, updateCvDto);
  }

  @Delete(':id')
  deleteCv(@Param('id') id: string) {
    return this.cvService.deleteCv(id);
  }

  @Post(':cvId/:skillId')
  addSkill(@Param('skillId') skillId: string, @Param('cvId') cvId: string) {
    return this.cvService.addSkill(skillId,cvId);
  }

  @Get(':id/skills')
  getSkills(@Param('id') id: string) {
    return this.cvService.getSkills(id);
  }
  
  @Delete(':cvId/:skillId')
  deleteSkill(@Param('skillId') skillId: string, @Param('cvId') cvId: string) {
    return this.cvService.deleteSkill(skillId,cvId);
  }
}