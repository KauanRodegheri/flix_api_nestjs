import { PartialType } from "@nestjs/mapped-types";
import { GenreDTO } from "./genres-create-dto";
import { IsInt, IsString } from "class-validator";

export class UpdateGenreDto{
    @IsString()
    name: string
}