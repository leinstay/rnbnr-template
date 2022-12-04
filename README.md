# RNBNR Starter Kit

This project is a [React Native](https://facebook.github.io/react-native/) boilerplate template powered by NativeBase, ReactNavigation, ReduxToolkit and TypeScript that can be used to kickstart a mobile application. The boilerplate provides **an optimized architecture for building solid cross-platform mobile applications** through separation of concerns between the UI and business logic. Live preview on [Google Play](https://play.google.com/store/apps/details?id=com.rnbnrstarterkit).

Inspiration: https://github.com/mcnamee/react-native-starter-kit

![_1](https://user-images.githubusercontent.com/8215580/205414454-ffd036e5-7e2b-4e8e-a0e2-7fb803500137.gif)
![_2](https://user-images.githubusercontent.com/8215580/205414460-9e18f865-9a6f-4706-90cc-be702b366a71.gif)

## Features

This template consists of four screens and three components showing the interaction between used libraries and offers a predefined project structure.

### Views

- **Screens**
  - Cards.tsx - _Demonstrates the use of a grid, images embedded in the application and a component constructed from a large number of props;_
  - Forms.tsx - _Demonstrates integration between NativeBase UI, Formik form controller, Yup validator and RTK store;_
  - Gallery.tsx - _Demonstrates the use of local state, remote images and gallery implementation;_
  - Session.tsx - _Demonstrates access to user files and basic CRUD operations on store;_
- **Components**
  - AppBar.tsx - _Demonstrates basic examples of use of reducers and preservation of application data in offline mode;_
  - Card.tsx - _Demonstrates reuse of a component by using props;_
  - Modal.tsx - _Demonstrates reuse of a component by using store;_

### Dependencies

- **Mandatory**
  - [React v18](reactjs.org) - _base library;_
  - [React Native v0.70](https://reactnative.dev/) - _base library;_
  - [Native Base v3.4](https://nativebase.io/) - _user interface toolkit;_
  - [React Navigation v6](https://reactnavigation.org/) - _routing and navigation;_
  - [Redux Toolkit v1.9](https://redux-toolkit.js.org/) - _flux architecture;_
- **Optional**
  - [Formik v2.2](https://formik.org/) - _advanced form controller_
  - [YUP v0.32](https://github.com/jquense/yup) - _validation schema builder_
  - [React Native Document Picker v8.1](https://github.com/rnmods/react-native-document-picker) - _interface to access documents;_
  - [React Native Image Viewing v0.2.2](https://github.com/jobtoday/react-native-image-viewing) - _gallery plugin;_
  - [React Native Vector Icons v9.2](https://github.com/oblador/react-native-vector-icons) - _additional icons from Feather, FontAwesome, etc;_
- **Development**
  - [TypeScript v4.9](https://www.typescriptlang.org/) - _extends javascript by adding types to the language_
  - [Prettier v2.8](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - _code formatter_
  - [ESLint v7.32](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - _code linter (config extends @react-native-community/eslint-config rules)_

### Structure

- src
  - assets - _static assets such as videos, fonts, images, etc_;
  - components - _custom components for use in screens_;
    - ...
    - Component.tsx
  - screens - _finished screens, i.e. views for your application_;
    - ...
    - Screen.tsx
  - slices - _business logic implemented using Redux reducers;_
    - ...
    - Slice.tsx
  - Theme.tsx - _global theme parameters, as an example this application uses the [Poppins](https://fonts.google.com/specimen/Poppins) font;_
  - Store.tsx - _state container which holds the application's global state;_
  - Types.tsx - _custom types and interfaces;_
- App.tsx - _handles your app startup and routing;_

## Installation

- Install [React Native Debugger](https://github.com/jhen0409/react-native-debugger/releases) and open before running the app
- Install `eslint` and `prettier` plugins into your IDE (you can adjust settings in .eslintrc.js and .prettierrc.js)
- Ensure your machine has the [React Native dependencies installed](https://facebook.github.io/react-native/docs/getting-started)

To create a new project using the boilerplate simply run:

```bash
npx react-native init MyApp --template rnbnr-template
```

Than install dependencies:

```bash
npm install
cd ios && pod install # for iOS
```

And test your new application:

```bash
npm run android # for Android devices or Android Simulator
npm run ios # for iOS devices or iOS Simulator
```
