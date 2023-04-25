import { CreateClimateDto } from './dto/create-climate.dto';
import { Injectable } from "@nestjs/common";
import { Climate, ClimateType } from "./climates.model";
import { v4 as uuid } from 'uuid';

@Injectable()
export class ClimatesService {
    private climates: Climate[] = [];

    getAllClimates(): Climate[] {
        return this.climates;
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