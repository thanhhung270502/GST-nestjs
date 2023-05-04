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
