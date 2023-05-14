import { Body, Controller, Get, Post, Param, Patch } from '@nestjs/common';
import { HistoryService } from './history.service';
import { History } from './history.entity';
import { CreateHistoryDto } from './dto/create-history.dto';

@Controller('history')
export class HistoryController {
  constructor(private historyService: HistoryService) {}

  // http://localhost:3000/history
  @Get('/:garden_id')
  getAllHistories(@Param('garden_id') garden_id: string): Promise<History[]> {
    return this.historyService.getAllHistory(garden_id);
  }

  @Post()
  createHistory(@Body() createHistoryDto: CreateHistoryDto): Promise<History> {
    return this.historyService.createHistory(createHistoryDto);
  }

  @Patch('/:id')
  updateHistory(
    @Param('id') id: string,
    @Body() hisData: CreateHistoryDto,
  ): Promise<void> {
    return this.historyService.updateHistory(id, hisData);
  }

  // @Post('/update/:user_id/:garden_id/:activity/:time')
  // updateHistory(
  //   @Param('id') id: string,
  //   @Param('user_id') user_id: string,
  //   @Param('garden_id') garden_id: string,
  //   @Param('activity') activity: string,
  //   @Param('time') time: Date,
  // ): Promise<History> {
  //   return this.historyService.updateHistory(
  //     id,
  //     user_id,
  //     garden_id,
  //     activity,
  //     time,
  //   );
  // }
}
