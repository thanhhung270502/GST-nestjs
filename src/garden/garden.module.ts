import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Garden } from "./garden.entity";
import { GardenController } from "./garden.controller";
import { GardenService } from "./garden.service";
import { User } from "src/auth/user.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Garden, User])],
    controllers: [GardenController],
    providers: [GardenService],
})

export class GardenModule {}