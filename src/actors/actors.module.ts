import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Actor } from './entities/actor/actor';
import { ActorsService } from './actors.service';
import { ActorsController } from './actors.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Actor])],
    providers: [ActorsService],
    controllers: [ActorsController]
})
export class ActorsModule {}
