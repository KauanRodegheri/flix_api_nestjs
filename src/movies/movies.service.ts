import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from './entities/movie/movie';
import { Repository } from 'typeorm';

@Injectable()
export class MoviesService {
    constructor(
        @InjectRepository(Movie)
        private readonly moviesRepository: Repository<Movie>
    ){}

    findAll(): Promise<Movie[]>{
        return this.moviesRepository.find()
    }

    findOne(id: number): Promise<Movie>{
        return this.moviesRepository.findOne({where: {id: id}})
    }

    create(movie: Movie){
        return this.moviesRepository.create(movie)
    }

    async update(id: number, movie: Movie): Promise<void>{
        await this.moviesRepository.update(id, movie)
    }

    async remove(id: number): Promise<void>{
        await this.moviesRepository.delete(id)
    }


}
