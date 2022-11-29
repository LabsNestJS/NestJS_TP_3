import { Controller, Body, Param, Get, Post, Patch, Delete } from '@nestjs/common';
import { CvService } from '../cv/cv.service';
import { CreateCvDto } from '../cv/dto/createCvDto';
import { UpdateCvDto } from '../cv/dto/updateCvDto';

@Controller('cv')
export class CvController {
  constructor(private readonly cvService: CvService) {}

  @Post()
  addCv(@Body() createCvDto: CreateCvDto) {
    return this.cvService.addCv(createCvDto);
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
  updateCv(@Param('id') id: string, @Body() updateCvDto: UpdateCvDto) {
      return this.cvService.updateCv(id, updateCvDto);
  }

  @Delete(':id')
  deleteCv(@Param('id') id: string) {
    return this.cvService.deleteCv(id);
  }
}