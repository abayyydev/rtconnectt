import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.RTconnect',
  appName: 'RT Connect',
  webDir: 'dist',
  server: {
    url: 'https://rtconnectted.vercel.app/',
    cleartext: true
  }
};

export default config;
