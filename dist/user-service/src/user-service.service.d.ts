import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserServiceService {
    private readonly userRepo;
    constructor(userRepo: Repository<User>);
    findAll(): Promise<User[]>;
}
