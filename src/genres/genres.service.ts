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

    async update(id: number, genre: Genre): Promise<object>{
        await this.genresRepository.update(id, genre)
        return genre
    }

    async remove(id: number): Promise<object>{
        const object_id = this.genresRepository.findOne({where: {id: id}})
        await this.genresRepository.delete(id)
        return {'message': `Excluido com sucesso o genêro: ${(await object_id).name}`,
        }
    }
}
