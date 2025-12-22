"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
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
//# sourceMappingURL=typeorm.config.js.map