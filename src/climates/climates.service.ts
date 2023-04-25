import { CreateClimateDto } from './dto/create-climate.dto';
import { Injectable, NotFoundException } from "@nestjs/common";
import { ClimateType } from "./climate-type.enum";
import { InjectRepository } from '@nestjs/typeorm';
import { Climate } from './climate.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClimatesService {
    constructor(
        @InjectRepository(Climate)
        private climatesRepository: Repository<Climate>
    ) {}

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