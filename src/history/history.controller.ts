import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { HistoryService } from './history.service';
import { History } from './history.entity';
import { CreateHistoryDto } from './dto/create-history.dto';

@Controller('history')
export class HistoryController {
  constructor(private historyService: HistoryService) {}

  // http://localhost:3000/history
  @Get()
  getAllHistories(): Promise<History[]> {
    return this.historyService.getAllHistory();
  }

  @Post()
  createHistory(@Body() createHistoryDto: CreateHistoryDto): Promise<History> {
    return this.historyService.createHistory(createHistoryDto);
  }

  @Post('/add/:id/:editor/:activity/:time')
  addHistory(
    @Param('id') id: string,
    @Param('editor') editor: string,
    @Param('activity') activity: string,
    @Param('time') time: Date,
  ): Promise<void> {
    return this.historyService.addHistory(id, editor, activity, time);
  }
}
