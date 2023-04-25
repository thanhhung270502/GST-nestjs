import { IsNotEmpty } from "class-validator";

export class CreateClimateDto {
    @IsNotEmpty()
    value: number;

    @IsNotEmpty()
    time: Date;
} 