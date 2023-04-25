import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ClimatesService } from './climates.service';
import { Climate, ClimateType } from './climates.model';
import { CreateClimateDto } from './dto/create-climate.dto';

@Controller('climates')
export class ClimatesController {
  constructor(private climatesService: ClimatesService) {}

  // localhost:3000/climates
  @Get()
  getAllClimates(): Climate[] {
    return this.climatesService.getAllClimates();
  }

  // localhost:3000/climates/:type
  @Get('/:type')
  getClimatesByType(@Param('type') type: ClimateType): Climate[] {
    return this.climatesService.getClimatesByType(type);
  }

  @Post()
  createClimate(@Body() createClimateDto: CreateClimateDto): Climate {
    return this.climatesService.createTask(createClimateDto);
  }
}
