import { IsNotEmpty } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
import { ClimateType } from "src/climates/climate-type.enum";

export class CreateModeGardenDto {
    @IsNotEmpty()
    garden_id: string;

    @IsNotEmpty()
    type: ClimateType;

    @IsNotEmpty()
    mode: string;
}