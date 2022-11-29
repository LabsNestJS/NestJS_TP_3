import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Skill } from '../skill/entity/skillEntity';
import { CreateSkillDto } from '../skill/dto/createSkillDto';
import { UpdateSkillDto } from '../skill/dto/updateSkillDto';


@Injectable()
export class SkillService {
  constructor(
    @InjectRepository(Skill)
    private readonly skillRepository : Repository<Skill>){}

  async addSkill(createSkillDto: CreateSkillDto) {
    return await this.skillRepository.save(createSkillDto);
  }

  async getSkill(id: string) {
    const skill = await this.skillRepository.findOne({where :{id: id}});
    if (!skill) {throw new NotFoundException("Skill not found!");}
    return skill;
  }

  async getSkills() {
    const skills = await this.skillRepository.find();
    if ( ! skills.length) {throw new NotFoundException("You have no skills!");}
    return skills;
  }

  async updateSkill(id: string, updateSkillDto: UpdateSkillDto) {
    const skill = await this.skillRepository.findOne({where :{id: id}});
    if (!skill) {throw new NotFoundException("Skill not found to be updated!");}
    skill.designation= updateSkillDto?.designation; 
    await this.skillRepository.save(skill);
    return "Skill has been updated successfully!";
  }

  async deleteSkill(id: string) {
    const skill = await this.skillRepository.findOne({where:{id:id}});
    if (skill){
        await this.skillRepository.softDelete(id);
        return skill;
    }
    throw new NotFoundException("Skill not found already!"); 
  }
}