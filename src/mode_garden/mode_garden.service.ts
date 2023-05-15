import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateModeGardenDto } from "./dto/create-mode_garden.dto";
import { Mode_Garden } from "./mode_garden.entity";
import { User } from "src/auth/user.entity";
import { ClimateType } from "src/climates/climate-type.enum";

@Injectable()
export class ModeGardenService {
    constructor(
        @InjectRepository(Mode_Garden)
        private modeGardenRepository: Repository<Mode_Garden>,

        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async getAllModeGardens(): Promise<Mode_Garden[]> {
        const mode_gardens = await this.modeGardenRepository.query(`SELECT * FROM MODE_GARDEN`);

        return mode_gardens;
    }

    async getModeGarden(garden_id: string, type: ClimateType): Promise<Mode_Garden> {
        const mode_garden = await this.modeGardenRepository.findOne({
            where: {
                garden_id,
                type
            }
        });
        
        if (mode_garden) return mode_garden;
        return null;
    }

    async createModeGarden(createModeGardenDto: CreateModeGardenDto): Promise<Mode_Garden> {
        const { garden_id, type, mode } = createModeGardenDto;

        const mode_garden = this.modeGardenRepository.create({
            garden_id,
            type,
            mode,
        });

        await this.modeGardenRepository.save(mode_garden);
        return mode_garden;
    }

    async updateModeGarden(createModeGardenDto: CreateModeGardenDto): Promise<Mode_Garden> {
        const mode_garden = await this.modeGardenRepository.findOne({
            where: {
                garden_id: createModeGardenDto.garden_id
            }
        });

        mode_garden.type = createModeGardenDto.type;
        mode_garden.mode = createModeGardenDto.mode;

        await this.modeGardenRepository.save(mode_garden);

        return mode_garden;
    }
}