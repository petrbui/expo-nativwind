# My Expo App Boilerplate

A React Native mobile application built with Expo, TypeScript, and NativeWind.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [iOS Simulator](https://docs.expo.dev/workflow/ios-simulator/) (for iOS development)
- [Android Studio](https://docs.expo.dev/workflow/android-studio-emulator/) (for Android development)
- [cross-env](https://www.npmjs.com/package/cross-env) for setting environment variables across platforms

## Installation

1. Clone the repository:

```bash
git clone <https://github.com/petrbui/expo-nativwind>
cd my-expo-app
```

2. Install dependencies:

```bash
yarn install
```

## Available Scripts

### Development

- `yarn start` - Starts the Expo development server
- `yarn ios` - Starts the app in iOS simulator
- `yarn android` - Starts the app in Android emulator
- `yarn web` - Starts the app in web browser
- `yarn prebuild` - Generates native code for iOS and Android
- `yarn lint` - Runs ESLint and Prettier checks
- `yarn format` - Fixes ESLint and Prettier issues automatically

### Local Builds

- `yarn eas:build:localdev:android` - Local development build for Android
- `yarn eas:build:localdev:ios` - Local development build for iOS

### Development Builds

- `yarn eas:build:dev:android` - Build Android development version
- `yarn eas:build:dev:ios` - Build iOS development version
- `yarn eas:build:dev:android:local` - Local Android development build
- `yarn eas:build:dev:ios:local` - Local iOS development build
- `yarn eas:build:dev:simulator:android` - Build for Android simulator
- `yarn eas:build:dev:simulator:ios` - Build for iOS simulator
- `yarn eas:submit:dev:android` - Submit Android development build
- `yarn eas:submit:dev:ios` - Submit iOS development build
- `yarn eas:update:dev:android` - Update development channel on Android
- `yarn eas:update:dev:ios` - Update development channel on iOS

### Staging Builds

- `yarn eas:build:staging:android` - Build Android staging version
- `yarn eas:build:staging:ios` - Build iOS staging version
- `yarn eas:build:staging:android:local` - Local Android staging build
- `yarn eas:build:staging:ios:local` - Local iOS staging build
- `yarn eas:submit:staging:android` - Submit Android staging build
- `yarn eas:submit:staging:ios` - Submit iOS staging build
- `yarn eas:update:staging:android` - Update staging channel on Android
- `yarn eas:update:staging:ios` - Update staging channel on iOS

### Production Builds

- `yarn eas:build:prod:android` - Build Android production version
- `yarn eas:build:prod:ios` - Build iOS production version
- `yarn eas:build:prod:android:local` - Local Android production build
- `yarn eas:build:prod:ios:local` - Local iOS production build
- `yarn eas:submit:prod:android` - Submit Android production build
- `yarn eas:submit:prod:ios` - Submit iOS production build
- `yarn eas:update:prod:android` - Update production channel on Android
- `yarn eas:update:prod:ios` - Update production channel on iOS

### General Updates

- `yarn update:development` - Update development channel

## Tech Stack

- React Native (0.76.7)
- Expo (52.0.37)
- TypeScript
- NativeWind (Tailwind CSS for React Native)
- Expo Router (for navigation)
- React Native Reanimated (for animations)

## Project Structure

The project uses Expo Router for navigation. The main entry point is defined in `expo-router/entry`.

## Development

### Code Style

This project uses:

- ESLint with `eslint-config-universe` configuration
- Prettier for code formatting
- TypeScript for type checking

To maintain code quality:

1. Run `yarn lint` to check for issues
2. Run `yarn format` to automatically fix formatting issues

### Styling

The project uses NativeWind (Tailwind CSS) for styling. Configure styles in the `tailwind.config.js` file.

## Dependencies

### Main Dependencies

- expo: ^52.0.37
- react: 18.3.1
- react-native: 0.76.7
- nativewind: latest
- expo-router: ~4.0.17
- react-native-reanimated: 3.16.2
- react-native-safe-area-context: 4.12.0
- react-native-screens: ~4.4.0
- expo-linking: ~7.0.5
- expo-constants: ~17.0.7

### Development Dependencies

- TypeScript: ~5.3.3
- ESLint: ^8.57.0
- Prettier: ^3.2.5
- Tailwind CSS: ^3.4.0
- cross-env: latest

## License

This project is private and not intended for public distribution.
