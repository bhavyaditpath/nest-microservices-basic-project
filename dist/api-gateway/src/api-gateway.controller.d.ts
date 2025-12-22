import { ClientProxy } from '@nestjs/microservices';
export declare class ApiGatewayController {
    private readonly userClient;
    constructor(userClient: ClientProxy);
    getUsers(): import("rxjs").Observable<any>;
}
