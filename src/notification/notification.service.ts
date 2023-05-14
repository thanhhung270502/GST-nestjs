import { CreateNotificationDto } from './dto/create-notifcation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Notification } from './notification.entity';
import { Injectable } from '@nestjs/common';
import { createQueryBuilder } from 'typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class NotificationService {
    constructor(
        @InjectRepository(Notification)
        private notificationRepository: Repository<Notification>,
    ) {}

    async getAllNotifications(): Promise<Notification[]> {
        const notifications = await this.notificationRepository.query('SELECT * FROM NOTIFICATION');

        return notifications;
    }

    async createNotification(createNotificationDto: CreateNotificationDto): Promise<Notification> {
        const { problem, sub_problem, time, garden_id } = createNotificationDto;

        const noti = this.notificationRepository.create({
            problem,
            sub_problem,
            time,
            garden_id
        });

        await this.notificationRepository.save(noti);
        return noti;
    }

    async deleteNotification(id: string): Promise<void> {
        const result = await this.notificationRepository.delete(id);
        console.log(result);
    }
}
