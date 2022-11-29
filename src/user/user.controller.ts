import { Controller, Body, Param, Get, Post, Patch, Delete } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/createUserDto';
import { UpdateUserDto } from '../user/dto/updateUserDto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    addUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.addUser(createUserDto);
    }
    
    @Get(':id')
    getUser(@Param('id') id: string) {
        return this.userService.getUser(id);
    }

    @Get()
    getUsers() {
        return this.userService.getUsers();
    }

    @Patch(':id')
    updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.updateUser(id, updateUserDto);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return this.userService.deleteUser(id);
    }
}