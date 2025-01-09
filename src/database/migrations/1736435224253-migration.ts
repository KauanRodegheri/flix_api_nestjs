import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1736435224253 implements MigrationInterface {
    name = 'Migration1736435224253'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie_actors_actor" DROP CONSTRAINT "FK_65be8ded67af2677acfd19854c2"`);
        await queryRunner.query(`ALTER TABLE "movie_actors_actor" ADD CONSTRAINT "FK_65be8ded67af2677acfd19854c2" FOREIGN KEY ("actorId") REFERENCES "actor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie_actors_actor" DROP CONSTRAINT "FK_65be8ded67af2677acfd19854c2"`);
        await queryRunner.query(`ALTER TABLE "movie_actors_actor" ADD CONSTRAINT "FK_65be8ded67af2677acfd19854c2" FOREIGN KEY ("actorId") REFERENCES "actor"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
