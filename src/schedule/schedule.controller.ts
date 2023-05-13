import { ClimateType } from 'src/climates/climate-type.enum';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { Schedule } from './schedule.entity';
import { ScheduleService } from './schedule.service';
import { Body, Controller, Get, Param, Post } from "@nestjs/common";

@Controller('schedule')
export class ScheduleController {
    constructor(private scheduleService: ScheduleService) {}

    // http://localhost:3000/schedule
    @Get() 
    getAllSchedules(): Promise<Schedule[]> {
        return this.scheduleService.getAllSchedules();
    }

    @Post()
    createSchedule(@Body() createScheduleDto: CreateScheduleDto): Promise<Schedule> {
        return this.scheduleService.createSchedule(createScheduleDto);
    }

    // http://localhost:3000/schedule/last/:type
    @Get('/last/:type')
    getLastScheduleByType(@Param('type') type: ClimateType): Promise<Schedule> {
        return this.scheduleService.getLastScheduleByType(type);
    }
}