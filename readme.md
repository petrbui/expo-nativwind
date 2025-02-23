# My Expo App Boiler plate

A React Native mobile application built with Expo, TypeScript, and NativeWind.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [iOS Simulator](https://docs.expo.dev/workflow/ios-simulator/) (for iOS development)
- [Android Studio](https://docs.expo.dev/workflow/android-studio-emulator/) (for Android development)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd my-expo-app
```

2. Install dependencies:

```bash
npm install
```

## Available Scripts

- `npm start` - Starts the Expo development server
- `npm run ios` - Starts the app in iOS simulator
- `npm run android` - Starts the app in Android emulator
- `npm run web` - Starts the app in web browser
- `npm run prebuild` - Generates native code for iOS and Android
- `npm run lint` - Runs ESLint and Prettier checks
- `npm run format` - Fixes ESLint and Prettier issues automatically

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

1. Run `npm run lint` to check for issues
2. Run `npm run format` to automatically fix formatting issues

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

## License

This project is private and not intended for public distribution.
