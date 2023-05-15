import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { ModeGardenService } from "./mode_garden.service";
import { CreateModeGardenDto } from "./dto/create-mode_garden.dto";
import { Mode_Garden } from "./mode_garden.entity";
import { ClimateType } from "src/climates/climate-type.enum";

@Controller('mode_garden')
export class ModeGardenController {
    constructor(private modeGardenService: ModeGardenService) {}

    // http://localhost:3000/mode_garden
    @Get()
    getAllModeGardens(): Promise<Mode_Garden[]> {
        return this.modeGardenService.getAllModeGardens();
    }

    @Get('/:garden_id/:type')
    getModeGarden(@Param('garden_id') garden_id: string, @Param('type') type: ClimateType): Promise<Mode_Garden> {
        return this.modeGardenService.getModeGarden(garden_id, type);
    }

    @Post()
    createModeGarden(@Body() createModeGardenDto: CreateModeGardenDto): Promise<Mode_Garden> {
        return this.modeGardenService.createModeGarden(createModeGardenDto);
    }

    @Patch()
    updateModeGarden(@Body() createModeGardenDto: CreateModeGardenDto): Promise<Mode_Garden> {
        return this.modeGardenService.updateModeGarden(createModeGardenDto);
    }
}