import { CreateNotificationDto } from './dto/create-notifcation.dto';
import { Notification } from './notification.entity';
import { NotificationService } from './notification.service';
import { Body, Controller, Get, Post } from "@nestjs/common";

@Controller('notification')
export class NotificationController {
    constructor(private notificationService: NotificationService) {}

    // http://localhost:3000/notification
    @Get() 
    getAllNotifications(): Promise<Notification[]> {
        return this.notificationService.getAllNotifications();
    }

    @Post()
    createNotification(@Body() createNotificationDto: CreateNotificationDto): Promise<Notification> {
        return this.notificationService.createNotification(createNotificationDto);
    }
}