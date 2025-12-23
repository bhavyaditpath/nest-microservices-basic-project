require('dotenv').config({ path: require('path').resolve('./apps/users-services/.env') });

process.env.DB_PASSWORD = 'ips12345';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AppDataSource } from './database/typeorm.config';

console.log('DEBUG DB_PASSWORD =>', process.env.DB_PASSWORD);
console.log('DEBUG DB_USER =>', process.env.DB_USER);
console.log('DEBUG DB_HOST =>', process.env.DB_HOST);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/users-services/.env',
    }),
    TypeOrmModule.forRoot({
      ...AppDataSource.options,
    }),
    UserModule,
  ],
})
export class UsersServicesModule {}
