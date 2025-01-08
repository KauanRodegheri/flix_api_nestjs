import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './entities/movie/movie';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Movie])],
    providers: [MoviesService],
    controllers: [MoviesController],
})
export class MoviesModule {}
