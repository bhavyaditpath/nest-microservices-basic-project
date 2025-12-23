import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { UsersServicesModule } from './users-services.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(UsersServicesModule, {
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 4001,
    },
  });

  await app.listen();
  console.log('User microservice is running on port 4001');
}

bootstrap();
