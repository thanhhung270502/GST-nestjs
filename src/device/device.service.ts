import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Device } from './device.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeviceService {
    constructor(
        @InjectRepository(Device)
        private deviceRepository: Repository<Device>
    ) {}

    async getStatusByName(name: string): Promise<Device> {
        const result = await this.deviceRepository.findOne({
            where: {
                name: name
            }
        })
        return result;
    }

    async updateStatusByName(name: string, status: number): Promise<Device> {
        const device = await this.deviceRepository.findOne({
            where: {
                name
            }
        });
        
        device.status = status;
        await this.deviceRepository.save(device);

        return device;
    }
}
