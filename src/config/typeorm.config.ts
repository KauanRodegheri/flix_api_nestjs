
console.log('oi')
console.log(process.env.DATABASE_PASSWORD)
import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { Movie } from 'src/movies/entities/movie/movie';
import { Genre } from 'src/genres/entities/genre/genre';
import { Actor } from 'src/actors/entities/actor/actor';
config();

const configService = new ConfigService();


const AppDataSource = new DataSource({
  type: 'postgres',
  host: configService.get<string>('DATABASE_HOST'),
  port: parseInt(configService.get<string>('DATABASE_PORT'), 5432),
  username: configService.get<string>('DATABASE_USER'),
  password: configService.get<string>('DATABASE_PASSWORD'),
  database: configService.get<string>('DATABASE_NAME'),
  synchronize: false,
  entities: [Movie, Genre, Actor],
  migrations: ['src/database/migrations/*-migration.ts'],
  migrationsRun: false,
  logging: true,
});

export default AppDataSource;