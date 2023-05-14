import { Module } from '@nestjs/common';
import { ClimatesModule } from './climates/climates.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { HistoryModule } from './history/history.module';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [
    ClimatesModule,
    AuthModule,
    HistoryModule,
    NotificationModule,

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'climate-management',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
