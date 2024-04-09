import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    open_weather: {
      key: process.env.OPEN_WEATHER_API_KEY,
      url: process.env.OPEN_WEATHER_API_URL,
    },
  };
});
