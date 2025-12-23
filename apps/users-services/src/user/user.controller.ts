import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('user.findAll')
  findAll() {
    return this.userService.findAll();
  }

  @MessagePattern('user.create')
  create(userData: any) {
    return this.userService.create(userData);
  }

  @MessagePattern('user.findByUsername')
  findByUsername(username: string) {
    return this.userService.findByUsername(username);
  }
}
