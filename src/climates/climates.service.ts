import { CreateClimateDto } from './dto/create-climate.dto';
import { Injectable, NotFoundException } from "@nestjs/common";
import { ClimateType } from "./climate-type.enum";
import { InjectRepository } from '@nestjs/typeorm';
import { Climate } from './climate.entity';
import { Repository } from 'typeorm';
import { log } from 'console';

@Injectable()
export class ClimatesService {
    constructor(
        @InjectRepository(Climate)
        private climatesRepository: Repository<Climate>
    ) {}

    async getAllClimates(): Promise<Climate[]> {
        const climates = await this.climatesRepository.query(`SELECT * FROM CLIMATE`);

        return climates;
    }

    async getClimatesByType(type: ClimateType): Promise<Climate[]> {
        const result = await this.climatesRepository.find({
            where: {
                type: type
            }
        })

        if (!result) {
            throw new NotFoundException(`Climate with type "${type}" not found`);
        }

        return result;
    }

    async createTask(createClimateDto: CreateClimateDto): Promise<Climate>  {
        const { value, time } = createClimateDto;

        const climate = this.climatesRepository.create({
            type: ClimateType.TEMP,
            value,
            time
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
                id
            }
        });

        climate.value = value;
        await this.climatesRepository.save(climate);

        return climate;
    }

    // getAllClimates(): Climate[] {
    //     return this.climates;
    // }

    // getClimatesByType(type: ClimateType): Climate[] {
    //     return this.climates.filter((climate) => climate.type === type)
    // }

    // createTask(createClimateDto: CreateClimateDto): Climate {
    //     const { value, time } = createClimateDto;
        
    //     const climate: Climate = {
    //         id: uuid(),
    //         type: ClimateType.TEMP,
    //         value,
    //         time
    //     };

    //     this.climates.push(climate);
    //     return climate;
    // }
}