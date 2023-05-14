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

  async getAllHistory(garden_id: string): Promise<History[]> {
    const histories = await this.historyRepository
      .createQueryBuilder('history')
      .orderBy('history.time', 'ASC')
      .where('history.garden_id = :garden_id', { garden_id: garden_id })
      .getMany();

    return histories;
  }

  async createHistory(createHistoryDto: CreateHistoryDto): Promise<History> {
    const { user_name, garden_id, activity, time } = createHistoryDto;

    const history = this.historyRepository.create({
      user_name,
      garden_id,
      activity,
      time,
    });

    await this.historyRepository.save(history);
    return history;
  }

  async updateHistory(id: string, hisData: CreateHistoryDto): Promise<void> {
    // await this.historyRepository.query(`
    // UPDATE HISTORY SET user_id = ${hisData.user_id}, garden_id = ${hisData.garden_id}, activity = ${hisData.activity}, time = ${hisData.time}
    // WHERE id = ${id}
    // `);

    const setup = await this.historyRepository
      .createQueryBuilder('history')
      .update()
      .set({
        user_name: hisData.user_name,
        garden_id: hisData.garden_id,
        activity: hisData.activity,
        time: hisData.time,
      })
      .where('history.id = :id', { id: id })
      .execute();
  }
}
