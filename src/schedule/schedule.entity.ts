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
    key_user_id: string
    
    @Column()
    start_time: Date;
    
    @Column()
    end_time: Date;

    @Column()
    status: ScheduleStatus;
}