import { IsNotEmpty } from 'class-validator';

export class CreateNotificationDto {
  @IsNotEmpty()
  status: string;

  problem: string;

  sub_problem: string;

  @IsNotEmpty()
  time: Date;
}
