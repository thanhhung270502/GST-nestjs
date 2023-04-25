import { Module } from '@nestjs/common';
import { ClimatesModule } from './climates/climates.module';

@Module({
  imports: [ClimatesModule],
})
export class AppModule {}
