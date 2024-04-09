import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { PollutionService } from '@src/pollution/pollution.service';

@ApiTags('pollution')
@Controller('pollution')
export class PollutionController {
  constructor(private pollutionService: PollutionService) {}

  @Get('/')
  getData(@Query('lat') lat: number, @Query('lng') lng: number) {
    return this.pollutionService.getData(lat, lng);
  }
}
