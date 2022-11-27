import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from '../user/user.service';
import { UserController } from '../user/user.controller';
import { User } from '../user/entity/userEntity';
import { Cv } from '../cv/entity/cvEntity';

@Module({
  imports: [TypeOrmModule.forFeature([User,Cv])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}