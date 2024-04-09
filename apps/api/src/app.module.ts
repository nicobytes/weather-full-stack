import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import config from './config';
import { PollutionModule } from './pollution/pollution.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.local'],
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        OPEN_WEATHER_API_KEY: Joi.string().required(),
        OPEN_WEATHER_API_URL: Joi.string().required(),
      }),
    }),
    PollutionModule,
  ],
})
export class AppModule {}
