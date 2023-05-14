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
    const histories = await this.historyRepository.query(
      `SELECT * FROM HISTORY`,
    );

    return histories;
  }

  async createHistory(createHistoryDto: CreateHistoryDto): Promise<History> {
    const { editor, activity, time } = createHistoryDto;

    const history = this.historyRepository.create({
      editor,
      activity,
      time,
    });

    await this.historyRepository.save(history);
    return history;
  }

  async addHistory(
    id: string,
    editor: string,
    activity: string,
    time: Date,
  ): Promise<void> {
    await this.historyRepository
      .createQueryBuilder()
      .insert()
      .into(History)
      .values({
        id: id,
        editor: editor,
        activity: activity,
        time: time,
      })
      .execute();
  }
}
