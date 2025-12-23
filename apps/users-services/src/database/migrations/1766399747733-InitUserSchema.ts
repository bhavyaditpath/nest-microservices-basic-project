import { MigrationInterface, QueryRunner } from "typeorm";

export class InitUserSchema1766399747733 implements MigrationInterface {
    name = 'InitUserSchema1766399747733'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "user_schema"."users_role_enum" AS ENUM('Admin', 'Branch')`);
        await queryRunner.query(`CREATE TABLE "user_schema"."users" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "createdBy" integer, "updatedBy" integer, "isRemoved" boolean NOT NULL DEFAULT false, "username" character varying NOT NULL, "password" character varying, "role" "user_schema"."users_role_enum" NOT NULL, "branchId" integer NOT NULL, "email" character varying, "googleId" character varying, "firstName" character varying, "lastName" character varying, "isEmailVerified" boolean NOT NULL DEFAULT false, "profilePicture" character varying, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_f382af58ab36057334fb262efd5" UNIQUE ("googleId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user_schema"."users"`);
        await queryRunner.query(`DROP TYPE "user_schema"."users_role_enum"`);
    }

}
