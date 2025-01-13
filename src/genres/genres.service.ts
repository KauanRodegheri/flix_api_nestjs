import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Genre } from './entities/genre/genre';
import { Repository } from 'typeorm';
import { GenreDTO } from './dto/genres-create-dto';
import { UpdateGenreDto } from './dto/genres-update-dto';

@Injectable()
export class GenresService {
    constructor(
        @InjectRepository(Genre)
        private genresRepository: Repository<Genre>,
    ){}

    findAll(): Promise<Genre[]>{
        return this.genresRepository.find();
    }

    findOne(id:number): Promise<Genre>{
        console.log(id)
        return this.genresRepository.findOne({where: {id: id}})
    }

    create(createGenreDto: GenreDTO): Promise<GenreDTO>{
        return this.genresRepository.save(createGenreDto)
    }

    async update(id: number, updateGenreDto: UpdateGenreDto): Promise<object>{
        await this.genresRepository.update(id, updateGenreDto)
        const genre = this.genresRepository.findOne({where: {id: id}})
        return genre
    }

    async remove(id: number): Promise<object>{
        const object_id = this.genresRepository.findOne({where: {id: id}})
        await this.genresRepository.delete(id)
        return {'message': `Excluido com sucesso o genêro: ${(await object_id).name}`,
        }
    }
}
