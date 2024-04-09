import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import config from './config';
import { WeatherModule } from './weather/weather.module';

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
    WeatherModule,
  ],
})
export class AppModule {}
