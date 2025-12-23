import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  app.enableCors({
    origin: true, // Allow all origins, or specify your frontend URL
    credentials: true,
  });
  await app.listen(3002);
}
bootstrap();
