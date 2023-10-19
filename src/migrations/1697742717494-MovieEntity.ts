import { MigrationInterface, QueryRunner } from "typeorm";

export class MovieEntity1697742717494 implements MigrationInterface {
    name = 'MovieEntity1697742717494'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Movie" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "description" text, "duration" integer NOT NULL, "price" integer NOT NULL, CONSTRAINT "UQ_946276d68d15a042ada67839303" UNIQUE ("name"), CONSTRAINT "PK_56d58b76292b87125c5ec8bdde0" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Movie"`);
    }

}
