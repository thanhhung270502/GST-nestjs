import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { ClimatesService } from './climates.service';
import { ClimateType } from './climate-type.enum';
import { CreateClimateDto } from './dto/create-climate.dto';
import { Climate } from './climate.entity';

@Controller('climates')
export class ClimatesController {
  constructor(private climatesService: ClimatesService) {}

  // http://localhost:3000/climates
  @Get()
  getAllClimates(): Promise<Climate[]> {
    return this.climatesService.getAllClimates();
  }

  // http://localhost:3000/climates/:type
  @Get('/:garden_id/:type')
  getClimatesByType(
    @Param('garden_id') garden_id: string,
    @Param('type') type: ClimateType,
  ): Promise<Climate[]> {
    return this.climatesService.getClimatesByType(garden_id, type);
  }

  // http://localhost:3000/climates/last/:type
  @Get('/last/:type')
  getLastClimateByType(@Param('type') type: ClimateType): Promise<Climate> {
    return this.climatesService.getLastClimateByType(type);
  }

  // http://localhost:3000/climates
  @Post()
  createClimate(@Body() createClimateDto: CreateClimateDto): Promise<Climate> {
    return this.climatesService.createClimate(createClimateDto);
  }

  @Delete('/:id')
  deleteClimate(@Param('id') id: string): Promise<void> {
    return this.climatesService.deleteClimate(id);
  }
}
