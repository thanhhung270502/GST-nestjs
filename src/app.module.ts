import { Module } from '@nestjs/common';
import { ClimatesModule } from './climates/climates.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ClimatesModule,
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
