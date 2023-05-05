import { CreateUserKeyDto } from './dto/create-userkey.dto';
import { UserKey } from './userkey.entity';
import { UserKeyService } from './userkeys.service';
import { Body, Controller, Get, Patch, Post } from "@nestjs/common";

@Controller('userkey')
export class UserKeyController {
    constructor(private userKeyService: UserKeyService) {}

    // http://localhost:3000/notification
    @Get() 
    getAllUserKeys(): Promise<UserKey[]> {
        return this.userKeyService.getAllUserKeys();
    }

    @Post()
    createUserKey(@Body() createUserKeyDto: CreateUserKeyDto): Promise<UserKey> {
        return this.userKeyService.createUserKey(createUserKeyDto);
    }

    @Patch()
    updateUserKey(@Body() user_id: string, key: string): Promise<UserKey> {
        return this.userKeyService.updateUserKey(user_id, key);
    }
}