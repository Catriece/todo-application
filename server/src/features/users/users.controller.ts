import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UserService } from './users.service';
import { UserEntity } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  //   @Get()
  //   findAllMembers(): Promise<UserEntity[]> {
  //     return this.usersService.findAll();
  //   }

  //   @Get()
  //   findAllUsers(): Promise<UserEntity[]> {
  //     return this.usersService.findAllUsers();
  //   }

  //   @Get(':id')
  //   findOneMember(@Param('id') id: string): Promise<UserEntity | null> {
  //     return this.usersService.findOne(+id);
  //  }

  @Post('/createuser')
  createUser(@Body() userData: UserEntity): Promise<UserEntity> {
    return this.usersService.createUser(userData);
  }

  //   @Delete(':id')
  //   removeUser(@Param('id') id: string): Promise<void> {
  //     return this.usersService.removeUser(+id);
  //   }

  //   @Delete(':id')
  //   deleteUser(@Param('id') id: string): Promise<void> {
  //     return this.usersService.deleteUser(+id);
  //  }
}
