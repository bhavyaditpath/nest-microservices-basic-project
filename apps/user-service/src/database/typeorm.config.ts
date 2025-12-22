import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'ips12345',
  database: 'Nest_Microservices',
  schema: 'user_schema',
  entities: ['dist/apps/user-service/**/*.entity.js'],
  migrations: ['dist/apps/user-service/database/migrations/*.js'],
});
