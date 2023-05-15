import { CreateScheduleDto } from './dto/create-schedule.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Schedule } from './schedule.entity';
import { Injectable } from "@nestjs/common";
import { Repository } from 'typeorm';
import { ClimateType } from 'src/climates/climate-type.enum';

@Injectable()
export class ScheduleService {
    constructor(
        @InjectRepository(Schedule)
        private scheduleRepository: Repository<Schedule>
    ) {}

    async getAllSchedules(): Promise<Schedule[]> {
        const schedules = await this.scheduleRepository.query("SELECT * FROM SCHEDULE");

        return schedules;
    }

    async createSchedule(createScheduleDto: CreateScheduleDto): Promise<Schedule> {
        const { type, start_time, end_time, garden_id, status } = createScheduleDto;

        const schedule = this.scheduleRepository.create({
            type, 
            start_time, 
            end_time, 
            garden_id,
            status,
            created_at: new Date(),
            updated_at: new Date()
        });

        await this.scheduleRepository.save(schedule);
        return schedule;
    }

    async getLastScheduleByType(garden_id: string, type: ClimateType): Promise<Schedule> {
        const schedule = await this.scheduleRepository
            .createQueryBuilder("schedule")
            .where("schedule.type = :type", {type: type})
            .andWhere("schedule.garden_id = :garden_id", {garden_id: garden_id})
            .orderBy("schedule.created_at", "DESC")
            .getOne();

        return schedule;
    }

    async updateStatusSchedule(garden_id: string, type: ClimateType, status: string): Promise<Schedule> {
        const schedule = await this.getLastScheduleByType(garden_id, type);

        schedule.status = status;

        await this.scheduleRepository.save(schedule);
        return schedule;
    }
}