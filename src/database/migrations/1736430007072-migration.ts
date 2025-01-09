import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1736430007072 implements MigrationInterface {
    name = 'Migration1736430007072'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "genre" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_0285d4f1655d080cfcf7d1ab141" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "actor" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "dateofBirth" character varying NOT NULL, "nacionality" character varying NOT NULL, CONSTRAINT "PK_05b325494fcc996a44ae6928e5e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "movie" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "genreId" integer, CONSTRAINT "PK_cb3bb4d61cf764dc035cbedd422" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "movie_actors_actor" ("movieId" integer NOT NULL, "actorId" integer NOT NULL, CONSTRAINT "PK_a69e570bd35d7cd2139d12270e9" PRIMARY KEY ("movieId", "actorId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_992f9af300d8c96c46fea4e541" ON "movie_actors_actor" ("movieId") `);
        await queryRunner.query(`CREATE INDEX "IDX_65be8ded67af2677acfd19854c" ON "movie_actors_actor" ("actorId") `);
        await queryRunner.query(`ALTER TABLE "movie" ADD CONSTRAINT "FK_3aaeb14b8d10d027190f3b159e5" FOREIGN KEY ("genreId") REFERENCES "genre"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "movie_actors_actor" ADD CONSTRAINT "FK_992f9af300d8c96c46fea4e5419" FOREIGN KEY ("movieId") REFERENCES "movie"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "movie_actors_actor" ADD CONSTRAINT "FK_65be8ded67af2677acfd19854c2" FOREIGN KEY ("actorId") REFERENCES "actor"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie_actors_actor" DROP CONSTRAINT "FK_65be8ded67af2677acfd19854c2"`);
        await queryRunner.query(`ALTER TABLE "movie_actors_actor" DROP CONSTRAINT "FK_992f9af300d8c96c46fea4e5419"`);
        await queryRunner.query(`ALTER TABLE "movie" DROP CONSTRAINT "FK_3aaeb14b8d10d027190f3b159e5"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_65be8ded67af2677acfd19854c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_992f9af300d8c96c46fea4e541"`);
        await queryRunner.query(`DROP TABLE "movie_actors_actor"`);
        await queryRunner.query(`DROP TABLE "movie"`);
        await queryRunner.query(`DROP TABLE "actor"`);
        await queryRunner.query(`DROP TABLE "genre"`);
    }

}
