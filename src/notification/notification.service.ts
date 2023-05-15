import { CreateNotificationDto } from './dto/create-notifcation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Notification } from './notification.entity';
import { Injectable } from "@nestjs/common";
import { Repository } from 'typeorm';

@Injectable()
export class NotificationService {
    constructor(
        @InjectRepository(Notification)
        private notificationRepository: Repository<Notification>
    ) {}

    async getAllNotifications(): Promise<Notification[]> {
        const notifications = await this.notificationRepository.query("SELECT * FROM NOTIFICATION");

        return notifications;
    }

    async createNotification(createNotificationDto: CreateNotificationDto): Promise<Notification> {
        const { status, problem, sub_problem, time, garden_id } = createNotificationDto;

        const noti = this.notificationRepository.create({
            status,
            problem,
            sub_problem,
            time,
            garden_id
        });

        await this.notificationRepository.save(noti);
        return noti;
    }
}