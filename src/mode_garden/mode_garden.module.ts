import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Mode_Garden } from "./mode_garden.entity";
import { ModeGardenController } from "./mode_garden.controller";
import { ModeGardenService } from "./mode_garden.service";
import { User } from "src/auth/user.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Mode_Garden, User])],
    controllers: [ModeGardenController],
    providers: [ModeGardenService],
})
export class ModeGardenModule {}