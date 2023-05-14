import { IsNotEmpty } from "class-validator";
import { NotiStatus } from "../noti-status.enum";

export class CreateNotificationDto {
    @IsNotEmpty()
    status: NotiStatus;

    @IsNotEmpty()
    problem: string;

    sub_problem: string;

    @IsNotEmpty()
    time: Date;

    @IsNotEmpty()
    garden_id: string;
}
