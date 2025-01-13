import { IsInt, IsString } from "class-validator";

export class GenreDTO {
    @IsString()
    name: string
}