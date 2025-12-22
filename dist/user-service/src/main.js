"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const user_service_module_1 = require("../user-service.module");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(user_service_module_1.UserServiceModule, {
        transport: microservices_1.Transport.TCP,
        options: {
            port: 3001,
        },
    });
    await app.listen();
}
bootstrap();
//# sourceMappingURL=main.js.map