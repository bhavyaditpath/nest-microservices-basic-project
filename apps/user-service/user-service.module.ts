import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './src/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'ips12345',
      database: 'Nest_Microservices',
      schema: 'user_schema',
      autoLoadEntities: true,
      synchronize: false,
    }),
    UserModule,
  ],
})
export class UserServiceModule { }
