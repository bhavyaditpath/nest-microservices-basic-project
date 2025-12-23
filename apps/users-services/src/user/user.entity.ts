import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { UserRole } from './role.enum';

abstract class BaseEntityClass {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @Column({ type: 'int', nullable: true })
  createdBy: number | null;

  @Column({ type: 'int', nullable: true })
  updatedBy: number | null;

  @Column({ type: 'boolean', default: false })
  isRemoved: boolean;
}

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


