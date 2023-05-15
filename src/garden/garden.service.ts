import { CreateGardenDto } from './dto/create-garden.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Garden } from './garden.entity';
import { Injectable } from "@nestjs/common";
import { Repository } from 'typeorm';
import { User } from 'src/auth/user.entity';

@Injectable()
export class GardenService {
    constructor(
        @InjectRepository(Garden)
        private gardenRepository: Repository<Garden>,

        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    async getAllGardens(): Promise<Garden[]> {
        const gardens = await this.gardenRepository.query("SELECT * FROM USERKEY");

        return gardens;
    }

    async createGarden(createGardenDto: CreateGardenDto): Promise<Garden> {
        const { url, gKey } = createGardenDto;

        const garden = this.gardenRepository.create({
            url, gKey
        })

        await this.gardenRepository.save(garden);
        return garden;
    }

    async updateGarden(garden_id: string, key: string): Promise<Garden> {
        const garden = await this.gardenRepository.findOne({
            where: {
                id: garden_id
            }
        });

        garden.gKey = key;
        await this.gardenRepository.save(garden);

        return garden;
    }

    async updateKeyGardenByUser(user_id: string, key: string): Promise<Garden> {
        const user = await this.userRepository
            .createQueryBuilder("user")
            .where("user.id = :user_id", {user_id: user_id})
            .getOne();
        
        const garden = await this.gardenRepository
            .createQueryBuilder("garden")
            .where("garden.id = :garden_id", {garden_id: user.garden_id})
            .getOne();

        garden.gKey = key;

        await this.gardenRepository.save(garden);

        return garden;
    }
}