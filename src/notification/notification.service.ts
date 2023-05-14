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
    const notifications = await this.notificationRepository.query(
      'SELECT * FROM NOTIFICATION',
    );

    return notifications;
  }

  async createNotification(
    createNotificationDto: CreateNotificationDto,
  ): Promise<Notification> {
    const { status, problem, sub_problem, time } = createNotificationDto;

    const noti = this.notificationRepository.create({
      status,
      problem,
      sub_problem,
      time,
    });

    await this.notificationRepository.save(noti);
    return noti;
  }

  async addNotification(
    id: string,
    status: string,
    problem: string,
    sub_problem: string,
    time: Date,
  ): Promise<void> {
    await this.notificationRepository
      .createQueryBuilder()
      .insert()
      .into(Notification)
      .values({
        id: id,
        status: status,
        problem: problem,
        sub_problem: sub_problem,
        time: time,
      })
      .execute();
  }

  async deleteNotification(id: string): Promise<void> {
    const result = await this.notificationRepository.delete(id);
    console.log(result);
  }
}
