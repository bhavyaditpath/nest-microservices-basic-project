import { Entity, Column } from 'typeorm';
import { UserRole } from './enums/role.enum';
import { BaseEntityClass } from '@libs/database/base.entity';


@Entity({ name: 'users' })
export class User extends BaseEntityClass {

  @Column()
  username: string;

  @Column({ nullable: true })
  password: string;

  @Column({
    type: "enum",
    enum: UserRole,
  })
  role: UserRole;

  @Column()
  branchId: number;

//   @ManyToOne(() => Branch, { eager: true })
//   @JoinColumn({ name: 'branchId' })
//   branch: Branch;

  // Google OAuth fields
  @Column({ unique: true, nullable: true })
  email: string;

  @Column({ unique: true, nullable: true })
  googleId: string;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ default: false })
  isEmailVerified: boolean;

  @Column({ nullable: true })
  profilePicture: string;
}

