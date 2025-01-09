import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from './entities/movie/movie';
import { In, Repository } from 'typeorm';
import { Actor } from 'src/actors/entities/actor/actor';
import { Genre } from 'src/genres/entities/genre/genre';

@Injectable()
export class MoviesService {
    constructor(
        @InjectRepository(Movie)
        private readonly moviesRepository: Repository<Movie>,

        @InjectRepository(Actor)
        private readonly actorsRepository: Repository<Actor>,

        @InjectRepository(Genre)
        private readonly genreRepository: Repository<Genre>
    ){}

    async findAll(): Promise<Movie[]>{
        return await this.moviesRepository.find({relations: ['genre','actors']})
    }

    async findOne(id: number): Promise<Movie>{
        return await this.moviesRepository.findOne({where: {id: id}, relations: ['genre', 'actors']})
    }

    async create(movie: Movie): Promise<Movie>{
        const {title, genre, actors} = movie;
        const genres = await this.genreRepository.findOneBy(genre)
        const actors_ = await this.actorsRepository.find({where: {id: In(actors)}})
        const movie_ = movie
        movie.title = title
        movie.genre = genres
        movie.actors = actors_
        return await this.moviesRepository.save(movie_)
    }

    async update(id: number, movieData: Movie): Promise<Movie>{
        const {title, genre, actors} = movieData
        console.log(movieData)
        const movie = await this.moviesRepository.findOne({where: {id: id}})
        if(!movie){
            throw new Error('Filme não encontrado')
        }
        if(actors){
            const actors_ = await this.actorsRepository.find({where: {id: In(actors)}})
            movie.actors = actors_
        }
        movie.title = title
        movie.genre = genre
        await this.moviesRepository.save(movie)
        return this.moviesRepository.findOne({where: {id: id}, relations: ['genre', 'actors']})
    }

    async remove(id: number): Promise<object>{
        const movie = await this.moviesRepository.findOne({where: {id: id}, relations: ['genre', 'actors']})
        if(!movie){
            return {"message": 'filme não encontrado'}
        }
        console.log(movie)
        await this.moviesRepository.delete(id)
        return movie
    }


}
