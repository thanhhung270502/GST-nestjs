import { CreateNotificationDto } from './dto/create-notifcation.dto';
import { Notification } from './notification.entity';
import { NotificationService } from './notification.service';
import { Body, Controller, Get, Post, Param, Delete } from '@nestjs/common';

@Controller('notification')
export class NotificationController {
  constructor(private notificationService: NotificationService) {}

  // http://localhost:3000/notification
  @Get('/:garden_id')
  getAllNotifications(
    @Param('garden_id') garden_id: string,
  ): Promise<Notification[]> {
    return this.notificationService.getAllNotifications(garden_id);
  }

  @Post()
  createNotification(
    @Body() createNotificationDto: CreateNotificationDto,
  ): Promise<Notification> {
    return this.notificationService.createNotification(createNotificationDto);
  }

  @Delete('/delete/:id')
  deleteNotification(@Param('id') id: string): Promise<void> {
    return this.notificationService.deleteNotification(id);
  }
}
