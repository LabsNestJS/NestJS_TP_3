import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entity/userEntity';
import { CreateUserDto } from '../user/dto/createUserDto';
import { UpdateUserDto } from '../user/dto/updateUserDto';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User)
        private readonly userRepository: Repository<User>,) {}

    addUser(createUserDto: CreateUserDto) {
        return this.userRepository.save(createUserDto);
    }

    async getUser(id: string) {
        const usr = await this.userRepository.findOne({where:{id:id}});
        if (usr){ 
            return usr;
        }
        throw new NotFoundException("User not found!");
    }
    
    getUsers() {
        if (!this.userRepository) return ["You have nothing to do!"];
        return this.userRepository.find();
    }

    async updateUser(id: string, updateUserDto: UpdateUserDto) {
        const usr = await this.userRepository.count({where:{id:id}});
        if (usr){
            await this.userRepository.update(id, updateUserDto);
            return "User has been updated successfully!";
        }
        else {
            throw new NotFoundException("User not found to be updated!");
        }
    }

    async deleteUser(id: string) {
        const usr = await this.userRepository.findOne({where:{id:id}});
        if (usr){
            await this.userRepository.softDelete(id);
            return usr;
        }
        throw new NotFoundException("User not found already!"); 
    }
  }