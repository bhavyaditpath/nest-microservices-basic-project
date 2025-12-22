import { UserRole } from './enums/role.enum';
import { BaseEntityClass } from '../../libs/database/base.entity';
export declare class User extends BaseEntityClass {
    username: string;
    password: string;
    role: UserRole;
    branchId: number;
    email: string;
    googleId: string;
    firstName: string;
    lastName: string;
    isEmailVerified: boolean;
    profilePicture: string;
}
