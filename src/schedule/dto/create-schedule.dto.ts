import { IsNotEmpty } from "class-validator";
import { ClimateType } from "src/climates/climate-type.enum";
import { ScheduleStatus } from "../schedule-status.enum";

export class CreateScheduleDto {
    @IsNotEmpty()
    type: ClimateType;

    @IsNotEmpty()
    key_user_id: string
    
    @IsNotEmpty()
    start_time: Date;
    
    @IsNotEmpty()
    end_time: Date;

    @IsNotEmpty()
    status: ScheduleStatus;
}