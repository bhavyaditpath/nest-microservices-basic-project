import { Controller, Get, Post, Put, Delete, Body, Param, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class ApiGatewayController {
  constructor(
    @Inject('USER_SERVICE') private readonly userClient: ClientProxy,
    @Inject('AUTH_SERVICE') private readonly authClient: ClientProxy,
  ) {}

  @Get('users')
  getUsers() {
    return this.userClient.send({ cmd: 'get-users' }, {});
  }

  @Post('users')
  createUser(@Body() userData: any) {
    return this.userClient.send({ cmd: 'create-user' }, userData);
  }

  @Put('users/:id')
  updateUser(@Param('id') id: string, @Body() userData: any) {
    return this.userClient.send({ cmd: 'update-user' }, { id: +id, userData });
  }

  @Delete('users/:id')
  deleteUser(@Param('id') id: string) {
    return this.userClient.send({ cmd: 'delete-user' }, +id);
  }

  @Post('auth/login')
  login(@Body() credentials: { username: string; password: string }) {
    return this.authClient.send({ cmd: 'login' }, credentials);
  }

  @Post('auth/refresh')
  refreshToken(@Body() data: { refreshToken: string }) {
    return this.authClient.send({ cmd: 'refresh-token' }, data);
  }
}
