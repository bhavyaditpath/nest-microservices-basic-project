import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('users')
export class ApiGatewayController {
  constructor(
    @Inject('USER_SERVICE') private readonly userClient: ClientProxy,
  ) {}

  @Get()
  getUsers() {
    return this.userClient.send({ cmd: 'get-users' }, {});
  }
}
