import { ClimateType } from 'src/climates/climate-type.enum';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { Schedule } from './schedule.entity';
import { ScheduleService } from './schedule.service';
import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";

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

    // http://localhost:3000/schedule/:garden_id/:type
    @Get('/:garden_id/:type')
    getLastScheduleByType(@Param('garden_id') garden_id: string, @Param('type') type: ClimateType): Promise<Schedule> {
        return this.scheduleService.getLastScheduleByType(garden_id, type);
    }

    // http://localhost:3000/schedule/:garden_id/:type
    @Patch('/:garden_id/:type')
    updateStatusSchedule(@Param('garden_id') garden_id: string, @Param('type') type: ClimateType, @Body('status') status: string): Promise<Schedule> {
        return this.scheduleService.updateStatusSchedule(garden_id, type, status);
    }
}