import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Genre } from "src/genres/entities/genre/genre";
import { Actor } from "src/actors/entities/actor/actor";

@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @ManyToOne(() => Genre)
    genre: Genre

    @ManyToMany(() => Actor, actor => actor.movies)
    @JoinTable()
    actors: Actor[];
}
