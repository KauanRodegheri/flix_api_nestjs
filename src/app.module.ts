import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenresModule } from './genres/genres.module';
import { ActorsModule } from './actors/actors.module';
import { Genre } from './genres/entities/genre/genre';
import { Actor } from './actors/entities/actor/actor';
import { MoviesModule } from './movies/movies.module';
import { Movie } from './movies/entities/movie/movie';
import { ConfigModule } from '@nestjs/config';


console.log(process.env.DATABASE_PORT)
@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 3306),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: false,
    entities: [Genre, Movie, Actor],
    autoLoadEntities: true,
    }),
    GenresModule,
    ActorsModule,
    MoviesModule
  ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
