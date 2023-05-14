import { CreateNotificationDto } from './dto/create-notifcation.dto';
import { Notification } from './notification.entity';
import { NotificationService } from './notification.service';
import { Body, Controller, Get, Post, Param, Delete } from '@nestjs/common';

@Controller('notification')
export class NotificationController {
  constructor(private notificationService: NotificationService) {}

  // http://localhost:3000/notification
  @Get()
  getAllNotifications(): Promise<Notification[]> {
    return this.notificationService.getAllNotifications();
  }

  @Post()
  createNotification(
    @Body() createNotificationDto: CreateNotificationDto,
  ): Promise<Notification> {
    return this.notificationService.createNotification(createNotificationDto);
  }

  // @Post('/add/:id/:status/:problem/:sub_problem/:time')
  // addNotification(
  //   @Param('id') id: string,
  //   @Param('status') status: string,
  //   @Param('problem') problem: string,
  //   @Param('sub_problem') sub_problem: string,
  //   @Param('time') time: Date,
  // ): Promise<void> {
  //   return this.notificationService.addNotification(
  //     id,
  //     status,
  //     problem,
  //     sub_problem,
  //     time,
  //   );
  // }
  @Delete('/delete/:id')
  deleteNotification(@Param('id') id: string): Promise<void> {
    return this.notificationService.deleteNotification(id);
  }
}
