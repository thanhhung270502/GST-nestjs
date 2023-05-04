import { IsNotEmpty } from "class-validator";

export class CreateNotificationDto {
    @IsNotEmpty()
    problem: string;

    sub_problem: string;

    @IsNotEmpty()
    time: Date;
}