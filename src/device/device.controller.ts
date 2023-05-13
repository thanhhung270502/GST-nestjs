import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { DeviceService } from './device.service';
import { Device } from './device.entity';

@Controller('device')
export class DeviceController {
    constructor(private deviceService: DeviceService) {}

    // http://localhost:3000/device/:name
    @Get('/:name')
    getStatusByName(@Param('name') name: string): Promise<Device> {
        return this.deviceService.getStatusByName(name);
    }

    @Patch('/:name')
    updateStatusByName(@Param('name') name: string, @Body('status') status: number): Promise<Device> {
        return this.deviceService.updateStatusByName(name, status);
    }
}