import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  findAll() {
    return this.userRepo.find();
  }

  async create(userData: Partial<User>) {
    if (!userData.password) {
      throw new Error('Password is required');
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const user = this.userRepo.create({
      ...userData,
      password: hashedPassword,
    });

    return this.userRepo.save(user);
  }

  update(id: number, userData: Partial<User>) {
    return this.userRepo.update(id, userData);
  }

  delete(id: number) {
    return this.userRepo.delete(id);
  }

  async findByUsername(username: string) {
    const user = await this.userRepo.findOne({ where: { username } });
    return user;
  }
}
