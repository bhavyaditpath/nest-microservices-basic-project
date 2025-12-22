import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'ips12345',
  database: 'Nest_Microservices',
  schema: 'user_schema',
  entities: ['apps/user-service/src/**/*.entity.ts'],
  migrations: ['apps/user-service/src/database/migrations/*.ts'],
});
