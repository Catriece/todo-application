// entities/auth/users.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}

  async createUser(userData: UserEntity): Promise<UserEntity> {
    return await this.usersRepository.save(userData);
  }

  //   async findAllUsers(allCircles: string): Promise<UserEntity[]> {
  //     const res = this.usersRepository.find(allCircles);
  //     if (res) return await res;
  //     else if (!res) {
  //         console.error("Error fetching users")
  //         return null};
  //   }

  //   findOne(userId: number): Promise<UserEntity | null> {
  //     return this.usersRepository.findOne(userId);
  //   }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
