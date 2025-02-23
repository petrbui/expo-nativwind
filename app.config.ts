import { ExpoConfig } from 'expo/config';

const PROJECT = 'myapp';

type Environment = 'staging' | 'production' | 'development' | 'local';

const VARIANT_MAP = {
  local: {
    name: `${PROJECT} - LOCAL`,
    scheme: `${PROJECT}local`,
  },
  development: {
    name: `${PROJECT} - DEVELOPMENT`,
    scheme: `${PROJECT}development`,
  },
  staging: {
    name: `${PROJECT} - STAGING`,
    scheme: `${PROJECT}staging`,
  },
  production: {
    name: PROJECT,
    scheme: PROJECT,
  },
} as const;

const variant = (process.env.APP_ENV as Environment) ?? 'development';

const { name, scheme } = VARIANT_MAP[variant];

export const packageIdentifier = `com.${PROJECT}.${scheme}`;

const config: ExpoConfig = {
  name,
  slug: PROJECT,
  scheme,
  version: '1.0.0',
  web: {
    favicon: './assets/favicon.png',
    bundler: 'metro',
  },
  experiments: {
    tsconfigPaths: true,
  },
  plugins: ['expo-router'],
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  newArchEnabled: true,
  assetBundlePatterns: ['**/*'],
  ios: {
    bundleIdentifier: packageIdentifier,
    supportsTablet: true,
  },
  android: {
    package: packageIdentifier,
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
  },
};

export default config;
