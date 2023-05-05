import { CreateUserKeyDto } from './dto/create-userkey.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserKey } from './userkey.entity';
import { Injectable } from "@nestjs/common";
import { Repository } from 'typeorm';

@Injectable()
export class UserKeyService {
    constructor(
        @InjectRepository(UserKey)
        private userKeyRepository: Repository<UserKey>
    ) {}

    async getAllUserKeys(): Promise<UserKey[]> {
        const userKeys = await this.userKeyRepository.query("SELECT * FROM NOTIFICATION");

        return userKeys;
    }

    async createUserKey(createUserKeyDto: CreateUserKeyDto): Promise<UserKey> {
        const { user_id, key } = createUserKeyDto;

        const userKey = this.userKeyRepository.create({
            user_id, key
        })

        await this.userKeyRepository.save(userKey);
        return userKey;
    }

    async updateUserKey(user_id: string, key: string): Promise<UserKey> {
        const userkey = await this.userKeyRepository.findOne({
            where: {
                user_id
            }
        });

        userkey.key = key;
        await this.userKeyRepository.save(userkey);

        return userkey;
    }
}