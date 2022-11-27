import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entity/userEntity';
import { Cv } from '../cv/entity/cvEntity';
import { Skill } from '../skill/entity/skillEntity';
import { CreateCvDto } from '../cv/dto/createCvDto';
import { UpdateCvDto } from '../cv/dto/updateCvDto';

@Injectable()
export class CvService {
    constructor( 
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @InjectRepository(Cv)
        private readonly cvRepository: Repository<Cv>,
        @InjectRepository(Skill)
        private readonly skillRepository: Repository<Skill>) {}

    async addCv(createCvDto: CreateCvDto, id:string) {
        if (!this.userRepository) { 
            throw new NotFoundException("User does not exist!");
        }
        else { 
            const usr = await this.userRepository.findOne({where : {id: id}});
            const cv = await  this.cvRepository.save({...createCvDto});
            if (!usr.cvs) usr.cvs =[];
            usr.cvs.push(cv);
            return cv;
        }
    }

    getCvs() {
        if (!this.cvRepository) return ["You have nothing to do!"];
        return this.cvRepository.find();
    }

    async getCv(id: string) {
        const cv = await this.cvRepository.findOne({where : {id: id}});
        if (!cv) {throw new NotFoundException("Cv not found!");}
        return cv;
    }

    async updateCv(id : string, updateCvDto: UpdateCvDto) {
        const cv = await this.cvRepository.count({where:{id:id}});
        if (cv){
            await this.cvRepository.update(id, updateCvDto);
            return "Cv has been updated successfully!";
        }
        else {
            throw new NotFoundException("Cv not found to be updated!");
        }
    }

    async deleteCv(id: string) {
        const cv = await this.cvRepository.findOne({where:{id:id}});
        if (cv){
            await this.cvRepository.softDelete(id);
            return cv;
        }
        throw new NotFoundException("Cv not found already!"); 
    }

    async addSkill(skillId: string, cvId:string) {
        const skill = await this.skillRepository.findOne({where : {id: skillId}});
        const cv = await this.cvRepository.findOne({where : {id: cvId}});
        if (!cv || !skill) throw new NotFoundException("Please check your skill or your cv ID!");
        if (!skill.cvs) skill.cvs =[];
        skill.cvs.push(cv);
        if (!cv.skills) cv.skills =[];
        skill.cvs.push(cv);
        await this.skillRepository.save(skill)
        return await this.cvRepository.save(cv);
    }

    async getSkills(id :string) {
        const cv = await this.cvRepository.findOne({where : {id: id}});
        if (!cv) throw new NotFoundException("Cv not found already!");
        if(cv.skills) return cv.skills;
        throw new NotFoundException("You have no skills!");
    }

    async deleteSkill(skillId: string, cvId:string){
        const cv = await this.cvRepository.findOne({where : {id: cvId}});
        if (!cv) throw new NotFoundException("Please check your skill or your cv ID!");
        if (!cv.skills) cv.skills =[];
        const skills = [];
        cv.skills.forEach(element => {if (element.id!=skillId) skills.push(element)});
        return await this.cvRepository.save(cv);
    }
}