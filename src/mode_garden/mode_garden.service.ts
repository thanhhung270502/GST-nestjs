import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateModeGardenDto } from "./dto/create-mode_garden.dto";
import { Mode_Garden } from "./mode_garden.entity";
import { User } from "src/auth/user.entity";

@Injectable()
export class ModeGardenService {
    constructor(
        @InjectRepository(Mode_Garden)
        private modeGardenRepository: Repository<Mode_Garden>,

        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async getAllModeGardens(): Promise<Mode_Garden[]> {
        const histories = await this.modeGardenRepository.query(`SELECT * FROM MODE_GARDEN`);

        return histories;
    }

    async createModeGarden(createModeGardenDto: CreateModeGardenDto): Promise<Mode_Garden> {
        const { garden_id , mode } = createModeGardenDto;

        const mode_garden = this.modeGardenRepository.create({
            garden_id,
            mode,
        });

        await this.modeGardenRepository.save(mode_garden);
        return mode_garden;
    }

    async updateModeGarden(user_id: string, mode: string): Promise<Mode_Garden> {
        const user = await this.userRepository
            .createQueryBuilder("user")
            .where("user.id = :user_id", {user_id: user_id})
            .getOne();

        const mode_garden = await this.modeGardenRepository.findOne({
            where: {
                garden_id: user.garden_id
            }
        });

        mode_garden.mode = mode;
        await this.modeGardenRepository.save(mode_garden);

        return mode_garden;
    }
}