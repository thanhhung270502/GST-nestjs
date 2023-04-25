import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClimatesService } from './climates.service';
import { Climate } from './climates.model';
import { CreateClimateDto } from './dto/create-climate.dto';

@Controller('climates')
export class ClimatesController {
  constructor(private climatesService: ClimatesService) {}

  @Get()
  getAllClimates(): Climate[] {
    return this.climatesService.getAllClimates();
  }

  @Post()
  createClimate(@Body() createClimateDto: CreateClimateDto): Climate {
    return this.climatesService.createTask(createClimateDto);
  }
}
