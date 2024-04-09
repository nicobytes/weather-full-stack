import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PollutionController } from './pollution.controller';
import { PollutionService } from './pollution.service';

@Module({
  imports: [HttpModule],
  controllers: [PollutionController],
  providers: [PollutionService],
})
export class PollutionModule {}
