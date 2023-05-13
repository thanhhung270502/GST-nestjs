import { IsNotEmpty } from "class-validator";

export class CreateGardenDto {
    @IsNotEmpty()
    url: string;

    @IsNotEmpty()
    key: string;
}