import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserServiceService } from './user-service.service';
import { UserServiceController } from './user-service.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserServiceController],
  providers: [UserServiceService],
})
export class UserModule {}
