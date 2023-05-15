import { ClimateType } from "src/climates/climate-type.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ScheduleStatus } from "./schedule-status.enum";

@Entity()
export class Schedule {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    type: ClimateType;

    @Column()
    start_time: Date;

    @Column()
    end_time: Date;

    @Column()
    garden_id: string;

    @Column()
    status: string;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;
}