import { Module } from '@nestjs/common';
import { ClimatesModule } from './climates/climates.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { HistoryModule } from './history/history.module';
import { NotificationModule } from './notification/notification.module';
import { ScheduleModule } from './schedule/schedule.module';
import { DeviceModule } from './device/device.module';
import { GardenModule } from './garden/garden.module';
import { ModeGardenModule } from './mode_garden/mode_garden.module';

@Module({
    imports: [
        ClimatesModule,
        AuthModule,
        HistoryModule,
        NotificationModule,
        ScheduleModule,
        GardenModule,
        DeviceModule,
        ModeGardenModule,

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
