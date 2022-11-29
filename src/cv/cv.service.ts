import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cv } from '../cv/entity/cvEntity';
import { CreateCvDto } from '../cv/dto/createCvDto';
import { UpdateCvDto } from '../cv/dto/updateCvDto';

@Injectable()
export class CvService {
    constructor( 
        @InjectRepository(Cv)
        private readonly cvRepository: Repository<Cv>) {}

    async addCv(createCvDto: CreateCvDto) {
        return this.cvRepository.save(createCvDto);
    }

    async getCv(id: string) {
        const cv = await this.cvRepository.findOne({where : {id: id}});
        if (!cv) {throw new NotFoundException("Cv not found!");}
        return cv;
    }

    getCvs() {
        if (!this.cvRepository) return ["You have nothing to do!"];
        return this.cvRepository.find();
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
}