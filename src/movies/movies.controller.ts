import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie/movie';

@Controller('movies')
export class MoviesController {
    constructor(
        private readonly movieService: MoviesService
    ){}

    @Get()
    findAll(): Promise<Movie[]>{
        return this.movieService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Movie>{
        return this.movieService.findOne(id)
    }

    @Post()
    create(@Body() movie: Movie){
        return this.movieService.create(movie)
    }

    @Put(':id')
    update(@Param('id') id:number, @Body() movie: Movie): Promise<void>{
        return this.movieService.update(id, movie)
    }
    
    @Delete(':id')
    remove(@Param('id') id:number): Promise<void>{
        return this.movieService.remove(id)
    }
}
