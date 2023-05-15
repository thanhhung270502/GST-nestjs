import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { NotiStatus } from "./noti-status.enum";

@Entity()
export class Notification {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    status: NotiStatus;

    @Column()
    problem: string;

    @Column()
    sub_problem: string;

    @Column()
    time: Date;

    @Column()
    garden_id: string;
}
