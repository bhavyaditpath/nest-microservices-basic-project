import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern({ cmd: 'login' })
  login(credentials: { username: string; password: string }) {
    return this.authService.login(credentials);
  }

  @MessagePattern({ cmd: 'refresh-token' })
  refreshToken(data: { refreshToken: string }) {
    return this.authService.refreshToken(data.refreshToken);
  }
}
