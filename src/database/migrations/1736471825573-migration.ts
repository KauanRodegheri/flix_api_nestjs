import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1736471825573 implements MigrationInterface {
    name = 'Migration1736471825573'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`genre\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`actor\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`dateofBirth\` varchar(255) NOT NULL, \`nacionality\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`movie\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`genreId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`movie_actors_actor\` (\`movieId\` int NOT NULL, \`actorId\` int NOT NULL, INDEX \`IDX_992f9af300d8c96c46fea4e541\` (\`movieId\`), INDEX \`IDX_65be8ded67af2677acfd19854c\` (\`actorId\`), PRIMARY KEY (\`movieId\`, \`actorId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`movie\` ADD CONSTRAINT \`FK_3aaeb14b8d10d027190f3b159e5\` FOREIGN KEY (\`genreId\`) REFERENCES \`genre\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`movie_actors_actor\` ADD CONSTRAINT \`FK_992f9af300d8c96c46fea4e5419\` FOREIGN KEY (\`movieId\`) REFERENCES \`movie\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`movie_actors_actor\` ADD CONSTRAINT \`FK_65be8ded67af2677acfd19854c2\` FOREIGN KEY (\`actorId\`) REFERENCES \`actor\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`movie_actors_actor\` DROP FOREIGN KEY \`FK_65be8ded67af2677acfd19854c2\``);
        await queryRunner.query(`ALTER TABLE \`movie_actors_actor\` DROP FOREIGN KEY \`FK_992f9af300d8c96c46fea4e5419\``);
        await queryRunner.query(`ALTER TABLE \`movie\` DROP FOREIGN KEY \`FK_3aaeb14b8d10d027190f3b159e5\``);
        await queryRunner.query(`DROP INDEX \`IDX_65be8ded67af2677acfd19854c\` ON \`movie_actors_actor\``);
        await queryRunner.query(`DROP INDEX \`IDX_992f9af300d8c96c46fea4e541\` ON \`movie_actors_actor\``);
        await queryRunner.query(`DROP TABLE \`movie_actors_actor\``);
        await queryRunner.query(`DROP TABLE \`movie\``);
        await queryRunner.query(`DROP TABLE \`actor\``);
        await queryRunner.query(`DROP TABLE \`genre\``);
    }

}
