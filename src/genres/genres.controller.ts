import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GenresService } from './genres.service';
import { Genre } from './entities/genre/genre';
import { GenreDTO } from './dto/genres-create-dto';
import { UpdateGenreDto } from './dto/genres-update-dto';

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
    create(@Body() createGenreDto: GenreDTO): Promise<GenreDTO>{
        return this.genresService.create(createGenreDto)
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateGenreDto:UpdateGenreDto): Promise<object>{
        return this.genresService.update(id, updateGenreDto)
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<object>{
        return this.genresService.remove(id)
    }

}
