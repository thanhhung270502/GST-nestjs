import { Body, Controller, Get, Patch, Post } from "@nestjs/common";
import { ModeGardenService } from "./mode_garden.service";
import { CreateModeGardenDto } from "./dto/create-mode_garden.dto";
import { Mode_Garden } from "./mode_garden.entity";

@Controller('mode_garden')
export class ModeGardenController {
    constructor(private modeGardenService: ModeGardenService) {}

    // http://localhost:3000/mode_garden
    @Get()
    getAllModeGardens(): Promise<Mode_Garden[]> {
        return this.modeGardenService.getAllModeGardens();
    }

    @Post()
    createModeGarden(@Body() createModeGardenDto: CreateModeGardenDto): Promise<Mode_Garden> {
        return this.modeGardenService.createModeGarden(createModeGardenDto);
    }

    @Patch()
    updateModeGarden(@Body('user_id') user_id: string, @Body('mode') mode: string): Promise<Mode_Garden> {
        return this.modeGardenService.updateModeGarden(user_id, mode);
    }
}