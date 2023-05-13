import { IsNotEmpty } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateHistoryDto {
    @IsNotEmpty()
    user_id: string;

    @IsNotEmpty()
    garden_id: string;

    @IsNotEmpty()
    activity: string;

    @IsNotEmpty()
    time: Date;
}