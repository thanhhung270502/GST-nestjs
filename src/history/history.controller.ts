import { Body, Controller, Get, Post } from "@nestjs/common";
import { HistoryService } from "./history.service";
import { History } from "./history.entity";
import { CreateHistoryDto } from "./dto/create-history.dto";

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
}