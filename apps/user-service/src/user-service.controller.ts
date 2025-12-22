import { Controller, Get } from '@nestjs/common';
import { UserServiceService } from './user-service.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UserServiceController {
  constructor(private readonly userServiceService: UserServiceService) {}

  @MessagePattern({ cmd: 'get-users' })
  getUsers() {
    return this.userServiceService.findAll();
  }

  @MessagePattern({ cmd: 'create-user' })
  createUser(userData: any) {
    return this.userServiceService.create(userData);
  }

  @MessagePattern({ cmd: 'update-user' })
  updateUser(data: { id: number; userData: any }) {
    const { id, userData } = data;
    return this.userServiceService.update(id, userData);
  }

  @MessagePattern({ cmd: 'delete-user' })
  deleteUser(id: number) {
    return this.userServiceService.delete(id);
  }

  @MessagePattern({ cmd: 'find-user-by-username' })
  findUserByUsername(username: string) {
    return this.userServiceService.findByUsername(username);
  }
}
