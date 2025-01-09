import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './entities/movie/movie';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { Genre } from 'src/genres/entities/genre/genre';
import { Actor } from 'src/actors/entities/actor/actor';

@Module({
    imports: [TypeOrmModule.forFeature([Movie, Genre, Actor])],
    providers: [MoviesService],
    controllers: [MoviesController],
})
export class MoviesModule {}
