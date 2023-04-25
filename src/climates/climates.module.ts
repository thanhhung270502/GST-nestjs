import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ClimatesController } from './climates.controller';
import { ClimatesService } from './climates.service';
import { Climate } from './climate.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Climate])],
    controllers: [ClimatesController],
    providers: [ClimatesService],
})
export class ClimatesModule {}