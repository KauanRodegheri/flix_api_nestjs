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
    async create(@Body() movie: Movie){
        return await this.movieService.create(movie)
    }

    @Put(':id')
    update(@Param('id') id:number, @Body() movieData: Movie): Promise<Movie>{
        return this.movieService.update(id, movieData)
    }
    
    @Delete(':id')
    remove(@Param('id') id:number): Promise<object>{
        return this.movieService.remove(id)
    }
}
