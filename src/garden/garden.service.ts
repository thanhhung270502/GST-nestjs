import { CreateGardenDto } from './dto/create-garden.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Garden } from './garden.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from 'src/auth/user.entity';

@Injectable()
export class GardenService {
  constructor(
    @InjectRepository(Garden)
    private gardenRepository: Repository<Garden>,

    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getAllGardens(): Promise<Garden[]> {
    const gardens = await this.gardenRepository.query('SELECT * FROM GARDEN');

    return gardens;
  }

  async getGardenById(id: string): Promise<Garden> {
    const gardens = await this.gardenRepository
      .createQueryBuilder('garden')
      .where(`garden.id = :garden_id`, { garden_id: id })
      .getOne();

    await this.gardenRepository.save(gardens);

    return gardens;
  }

  async createGarden(createGardenDto: CreateGardenDto): Promise<Garden> {
    const { url, gKey } = createGardenDto;

    const garden = this.gardenRepository.create({
      url,
      gKey,
    });

    await this.gardenRepository.save(garden);
    return garden;
  }

  async updateGarden(id: string, gardenData: CreateGardenDto): Promise<void> {
    const garden = await this.gardenRepository
      .createQueryBuilder('garden')
      .update()
      .set({
        url: gardenData.url,
        gKey: gardenData.gKey,
      })
      .where(`garden.id = :garden_id`, { garden_id: id })
      .execute();
  }

  async updateKeyGardenByUser(user_id: string, gKey: string): Promise<Garden> {
    const user = await this.userRepository
      .createQueryBuilder('user')
      .where('user.id = :user_id', { user_id: user_id })
      .getOne();

    console.log(user);

    const garden = await this.gardenRepository
      .createQueryBuilder('garden')
      .where('garden.id = :garden_id', { garden_id: user.garden_id })
      .getOne();

    garden.gKey = gKey;

    await this.gardenRepository.save(garden);

    return garden;
  }
}
