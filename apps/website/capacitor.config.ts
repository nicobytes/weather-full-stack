import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nicobytes.weather',
  appName: 'weather',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
