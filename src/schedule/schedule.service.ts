import { CreateScheduleDto } from './dto/create-schedule.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Schedule } from './schedule.entity';
import { Injectable } from "@nestjs/common";
import { Repository } from 'typeorm';

@Injectable()
export class ScheduleService {
    constructor(
        @InjectRepository(Schedule)
        private scheduleRepository: Repository<Schedule>
    ) {}

    async getAllSchedules(): Promise<Schedule[]> {
        const schedules = await this.scheduleRepository.query("SELECT * FROM NOTIFICATION");

        return schedules;
    }

    async createSchedule(createScheduleDto: CreateScheduleDto): Promise<Schedule> {
        const { type, key_user_id, start_time, end_time, status } = createScheduleDto;

        const schedule = this.scheduleRepository.create({
            type, key_user_id, start_time, end_time, status
        })

        await this.scheduleRepository.save(schedule);
        return schedule;
    }
}