import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserKey } from "./userkey.entity";
import { UserKeyController } from "./userkeys.controller";
import { UserKeyService } from "./userkeys.service";

@Module({
    imports: [TypeOrmModule.forFeature([UserKey])],
    controllers: [UserKeyController],
    providers: [UserKeyService],
})

export class UserKeyModule {}