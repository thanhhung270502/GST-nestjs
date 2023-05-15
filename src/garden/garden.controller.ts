import { CreateGardenDto } from './dto/create-garden.dto';
import { Garden } from './garden.entity';
import { GardenService } from './garden.service';
import { Body, Controller, Get, Patch, Post, Param } from '@nestjs/common';

@Controller('garden')
export class GardenController {
  constructor(private gardenService: GardenService) {}

  // http://localhost:3000/garden
  @Get()
  getAllGardens(): Promise<Garden[]> {
    return this.gardenService.getAllGardens();
  }

  @Get('/:id')
  getGardenById(@Param('id') id: string): Promise<Garden> {
    return this.gardenService.getGardenById(id);
  }

  @Post()
  createGarden(@Body() createGardenDto: CreateGardenDto): Promise<Garden> {
    return this.gardenService.createGarden(createGardenDto);
  }

  @Patch('/:id')
  updateUrlGarden(
    @Param('id') id: string,
    @Body() gardenData: CreateGardenDto,
  ): Promise<void> {
    return this.gardenService.updateGarden(id, gardenData);
  }

  // http://localhost:3000/garden/updateKey
  @Patch('updateKey')
  updateKeyGardenByUser(
    @Body('user_id') user_id: string,
    @Body('key') key: string,
  ): Promise<Garden> {
    return this.gardenService.updateKeyGardenByUser(user_id, key);
  }
}
