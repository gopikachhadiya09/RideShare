# Wingz Ride-Sharing Driver App

A simplified React Native mobile application designed for ride-sharing drivers. This app allows drivers to view nearby ride requests on a map and accept or decline them. The project utilizes Redux for effective state management.

## Features

- Home Screen: Displays a map showing the driver's current location and nearby ride requests as markers.
- Ride Request Details Screen: Allows drivers to select a ride request, view details, and choose to accept or decline the request.
- State Management with Redux: Utilizes Redux to manage driver location, nearby ride requests, and ride request statuses.
- Smooth UI/UX Transitions: User-friendly interface with smooth screen transitions.

## Prerequisites

- Node.js: Version 14.x or higher
- Yarn or npm
- React Native CLI: For building and running the application
- Android Studio or Xcode: For running the application on Android or iOS simulators

### Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

## OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Congratulations! :tada:

You've successfully run your React Native App. :partying_face:

