import { IsDecimal, IsNotEmpty } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
import { ClimateType } from "../climate-type.enum";

export class CreateClimateDto {
    @IsNotEmpty()
    type: ClimateType;

    @IsNotEmpty()
    @ApiProperty()
    // @IsDecimal({ decimal_digits: '2', force_decimal: true })
    value: number;

    @IsNotEmpty()
    time: Date;

    garden_id: string;
}