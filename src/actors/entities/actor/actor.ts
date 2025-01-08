import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
