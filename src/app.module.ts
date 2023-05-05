import { Module } from '@nestjs/common';
import { ClimatesModule } from './climates/climates.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { HistoryModule } from './history/history.module';
import { NotificationModule } from './notification/notification.module';
import { ScheduleModule } from './schedule/schedule.module';
import { UserKeyModule } from './userkeys/schedule.module';

@Module({
  imports: [
    ClimatesModule,
    AuthModule,
    HistoryModule,
    NotificationModule,
    ScheduleModule,
    UserKeyModule,

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Petykute161',
      database: 'climate-management',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
