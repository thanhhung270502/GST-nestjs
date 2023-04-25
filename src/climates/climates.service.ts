import { CreateClimateDto } from './dto/create-climate.dto';
import { Injectable } from "@nestjs/common";
import { Climate, ClimateType } from "./climate.model";
import { v4 as uuid } from 'uuid';

@Injectable()
export class ClimatesService {
    private climates: Climate[] = [];

    getAllClimates(): Climate[] {
        return this.climates;
    }

    getClimatesByType(type: ClimateType): Climate[] {
        return this.climates.filter((climate) => climate.type === type)
    }

    createTask(createClimateDto: CreateClimateDto): Climate {
        const { value, time } = createClimateDto;
        
        const climate: Climate = {
            id: uuid(),
            type: ClimateType.TEMP,
            value,
            time
        };

        this.climates.push(climate);
        return climate;
    }
}