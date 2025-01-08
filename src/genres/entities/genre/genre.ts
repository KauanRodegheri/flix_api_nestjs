import { Movie } from "src/movies/entities/movie/movie";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Genre {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
}
