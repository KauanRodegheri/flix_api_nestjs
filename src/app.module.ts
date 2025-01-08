import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenresModule } from './genres/genres.module';
import { ActorsModule } from './actors/actors.module';
import { Genre } from './genres/entities/genre/genre';
import { Actor } from './actors/entities/actor/actor';
import { MoviesService } from './movies/movies.service';
import { MoviesController } from './movies/movies.controller';
import { MoviesModule } from './movies/movies.module';
import { Movie } from './movies/entities/movie/movie';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Walker0078.',
    database: 'test_nestjs',
    entities: [Genre, Actor, Movie],
    synchronize: true,
  }),
  GenresModule,
  ActorsModule,
  MoviesModule,
  ],
  providers: [AppService],
  controllers: [AppController]
})
export class AppModule {}
