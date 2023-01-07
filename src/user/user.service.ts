import { Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { hash } from 'bcryptjs';
import { Roles } from '../auth/roles.enum';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne( id: number): Promise<User> {
    return this.userRepository.findOne({where: {id}});
  }

  async create(user: User): Promise<User> {
    user.password = await hash(user.password, 10);
    return this.userRepository.save(user);
  }

  async update(id: number, user: User): Promise<User> {
    await this.userRepository.update(id, user);
    return this.userRepository.findOne({where: {id}});
  }

  async delete(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

  async findByUsername(username: string): Promise<User> {
    return this.userRepository.findOne({where: {username}});
  }

  async updatePassword(id: number, password: string): Promise<User> {
    const hashedPassword = await hash(password, 10);
    await this.userRepository.update(id, { password: hashedPassword });
    return this.userRepository.findOne({where: {id}});
  }

  async promoteToAdmin(id: number): Promise<User> {
    await this.userRepository.update(id, { role: Roles.ADMIN });
    return this.userRepository.findOne({where: {id}});
  }
}
