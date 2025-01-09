import { Movie } from "src/movies/entities/movie/movie";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Actor {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    dateofBirth: string

    @Column()
    nacionality: string

    @ManyToMany(() => Movie, movie => movie.actors)
    movies: Movie[]
}
