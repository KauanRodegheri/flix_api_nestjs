import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Genre } from './entities/genre/genre';
import { Repository } from 'typeorm';

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

    create(genre: Genre): Promise<Genre>{
        return this.genresRepository.save(genre)
    }

    async update(id: number, genre: Genre): Promise<void>{
        await this.genresRepository.update(id, genre)
    }

    async remove(id: number): Promise<void>{
        console.log(id)
        await this.genresRepository.delete(id)
    }
}
