import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GenresService } from './genres.service';
import { Genre } from './entities/genre/genre';

@Controller('genres')
export class GenresController {
    constructor(private readonly genresService: GenresService){}

    @Get()
    findAll(): Promise<Genre[]>{
        return this.genresService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Genre>{
        return this.genresService.findOne(id)
    }

    @Post()
    create(@Body() genre: Genre): Promise<Genre>{
        return this.genresService.create(genre)
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() genre:Genre): Promise<void>{
        return this.genresService.update(id, genre)
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void>{
        return this.genresService.remove(id)
    }

}
