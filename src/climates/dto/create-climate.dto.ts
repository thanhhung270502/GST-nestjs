import { IsDecimal, IsNotEmpty } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateClimateDto {
    @IsNotEmpty()
    @ApiProperty()
    @IsDecimal({ decimal_digits: '2', force_decimal: true })
    value: number;

    @IsNotEmpty()
    time: Date;
}