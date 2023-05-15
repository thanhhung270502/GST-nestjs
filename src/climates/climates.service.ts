import { CreateClimateDto } from './dto/create-climate.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ClimateType } from './climate-type.enum';
import { InjectRepository } from '@nestjs/typeorm';
import { Climate } from './climate.entity';
import { Repository } from 'typeorm';
import { log } from 'console';

@Injectable()
export class ClimatesService {
  constructor(
    @InjectRepository(Climate)
    private climatesRepository: Repository<Climate>,
  ) {}

  async getAllClimates(): Promise<Climate[]> {
    const climates = await this.climatesRepository
      .createQueryBuilder('climate')
      .orderBy('climate.time', 'ASC')
      .getMany();

    return climates;
  }

  async getClimatesByType(
    garden_id: string,
    type: ClimateType,
  ): Promise<Climate[]> {
    const result = await this.climatesRepository.find({
      order: {
        time: 'ASC',
      },
      where: {
        type: type,
        garden_id: garden_id,
      },
    });

    if (!result) {
      throw new NotFoundException(`Climate with type "${type}" not found`);
    }

    return result;
  }

  async getLastClimateByType(type: ClimateType): Promise<Climate> {
    const climate = await this.climatesRepository
      .createQueryBuilder('climate')
      .where('climate.type = :type', { type: type })
      .orderBy('climate.time', 'DESC')
      .getOne();

    return climate;
  }

  async createClimate(createClimateDto: CreateClimateDto): Promise<Climate> {
    const { type, value, time, garden_id } = createClimateDto;

    const climate = this.climatesRepository.create({
      type,
      value,
      time,
      garden_id,
    });

    await this.climatesRepository.save(climate);
    return climate;
  }

  async deleteClimate(id: string): Promise<void> {
    const result = await this.climatesRepository.delete(id);
    console.log(result);
  }

  async updateClimate(id: string, value: number): Promise<Climate> {
    const climate = await this.climatesRepository.findOne({
      where: {
        id,
      },
    });

    climate.value = value;
    await this.climatesRepository.save(climate);

    return climate;
  }
}
