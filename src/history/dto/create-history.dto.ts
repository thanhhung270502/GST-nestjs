import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateHistoryDto {
  @IsNotEmpty()
  user_name: string;

  @IsNotEmpty()
  garden_id: string;

  @IsNotEmpty()
  activity: string;

  @IsNotEmpty()
  time: Date;
}
