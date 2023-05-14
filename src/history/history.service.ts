import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { History } from './history.entity';
import { Repository } from 'typeorm';
import { CreateHistoryDto } from './dto/create-history.dto';

@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(History)
    private historyRepository: Repository<History>,
  ) {}

  async getAllHistory(): Promise<History[]> {
    const histories = await this.historyRepository
      .createQueryBuilder('history')
      .orderBy('history.time', 'ASC')
      .getMany();

    return histories;
  }

  async createHistory(createHistoryDto: CreateHistoryDto): Promise<History> {
    const { user_id, garden_id, activity, time } = createHistoryDto;

    const history = this.historyRepository.create({
      user_id,
      garden_id,
      activity,
      time,
    });

    await this.historyRepository.save(history);
    return history;
  }
}
