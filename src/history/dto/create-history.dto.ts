import { IsDecimal, IsNotEmpty } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateHistoryDto {
    @IsNotEmpty()
    editor: string;

    @IsNotEmpty()
    activity: string;

    @IsNotEmpty()
    time: Date;
}