import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Actor } from './entities/actor/actor';
import { Repository } from 'typeorm';
import { NotFoundError } from 'rxjs';

@Injectable()
export class ActorsService {
    constructor(
        @InjectRepository(Actor)
        private readonly actorsRepository: Repository<Actor>
    ){}

    findAll(): Promise<Actor[]>{
        return this.actorsRepository.find()
    }

    findOne(id: number): Promise<Actor>{
        return this.actorsRepository.findOne({where: {id: id}})
    }

    create(actor: Actor): Promise<Actor>{
        return this.actorsRepository.save(actor)
    }

    async update(id: number, actor:Actor): Promise<void>{
        await this.actorsRepository.update(id, actor)
    }

    async remove(id: number): Promise<object>{
        const object_remove = this.actorsRepository.findOne({where: {id: id}})
        await this.actorsRepository.delete(id)
        return {'message': `excluido com sucesso o filme ${(await object_remove).name}`}
    }
}
