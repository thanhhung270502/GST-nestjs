import { Module } from '@nestjs/common';
import { ClimatesController } from './climates.controller';
import { ClimatesService } from './climates.service';

@Module({
    controllers: [ClimatesController],
    providers: [ClimatesService],
})
export class ClimatesModule {}