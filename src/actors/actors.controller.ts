import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ActorsService } from './actors.service';
import { Actor } from './entities/actor/actor';

@Controller('actors')
export class ActorsController {
    constructor(
        private readonly actorsService: ActorsService
    ){}

    @Get()
    findAll(): Promise<Actor[]>{
        return this.actorsService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Actor>{
        return this.actorsService.findOne(id)
    }

    @Post()
    crate(@Body() actor: Actor): Promise<Actor>{
        return this.actorsService.create(actor)
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() actor: Actor): Promise<object>{
        await this.actorsService.update(id, actor)
        return this.actorsService.findOne(id)
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<{'message': string}>{
        try {
            await this.actorsService.remove(id)
            return {'message': "excluido com sucesso"}
        }
        catch {
            return {'message': 'Não foi possivel excluir'}
        }
    }
}
