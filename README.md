# RNBNR Template

React Native boilerplate powered by NativeBase, React Navigation, Redux Toolkit and TypeScript. It gives a new mobile app a working project structure with the UI and the business logic kept apart, plus four example screens and three components that show how the libraries fit together. There is a live preview on [Google Play](https://play.google.com/store/apps/details?id=com.rnbnrstarterkit). Inspired by [react-native-starter-kit](https://github.com/mcnamee/react-native-starter-kit).

![Cards and forms](https://user-images.githubusercontent.com/8215580/205414454-ffd036e5-7e2b-4e8e-a0e2-7fb803500137.gif)
![Gallery](https://user-images.githubusercontent.com/8215580/205414460-9e18f865-9a6f-4706-90cc-be702b366a71.gif)
![Session](https://user-images.githubusercontent.com/8215580/205414461-7eb6f37a-fd9a-4781-b978-72f9fb57c1bb.gif)

## Features

Screens

| Screen | Shows |
|---|---|
| `Cards.tsx` | A grid, bundled images and a component built from many props |
| `Forms.tsx` | NativeBase UI with the Formik form controller, Yup validation and the RTK store |
| `Gallery.tsx` | Local state, remote images and a gallery |
| `Session.tsx` | Access to user files and basic CRUD on the store |

Components

| Component | Shows |
|---|---|
| `AppBar.tsx` | Reducers and keeping app data while offline |
| `Card.tsx` | Reusing a component through props |
| `Modal.tsx` | Reusing a component through the store |

Dependencies

| | Library | Role |
|---|---|---|
| Core | [React 18](https://react.dev), [React Native 0.70](https://reactnative.dev/) | base |
| | [NativeBase 3.4](https://nativebase.io/) | UI toolkit |
| | [React Navigation 6](https://reactnavigation.org/) | routing |
| | [Redux Toolkit 1.9](https://redux-toolkit.js.org/) | state |
| Optional | [Formik 2.2](https://formik.org/), [Yup 0.32](https://github.com/jquense/yup) | forms and validation |
| | [react-native-document-picker 8.1](https://github.com/rnmods/react-native-document-picker) | file access |
| | [react-native-image-viewing 0.2](https://github.com/jobtoday/react-native-image-viewing) | gallery |
| | [react-native-vector-icons 9.2](https://github.com/oblador/react-native-vector-icons) | icons |
| Dev | TypeScript 4.9, Prettier 2.8, ESLint 7.32 with the `@react-native-community` rules | |

## Requirements

A machine with the [React Native dependencies](https://reactnative.dev/docs/environment-setup) installed. [React Native Debugger](https://github.com/jhen0409/react-native-debugger/releases) and the `eslint` and `prettier` plugins for your IDE are recommended. Their settings are in `.eslintrc.js` and `.prettierrc.js`.

## Installation

Create a new project from the template, install the dependencies and run it:

```bash
npx react-native init MyApp --template rnbnr-template
cd MyApp
npm install
cd ios && pod install && cd ..   # iOS only
npm run android                  # or: npm run ios
```

## Layout

```
template/
  App.tsx            app startup and routing
  src/
    assets/          static assets (fonts, images, videos)
    components/      reusable components
    screens/         finished screens
    slices/          business logic as Redux reducers
    Theme.tsx        global theme, uses the Poppins font as an example
    Store.tsx        the Redux store
    Types.tsx        custom types and interfaces
template.config.js   react-native template entry
```

## License and credits

MIT License, see [LICENSE](LICENSE).

* Structure inspired by [react-native-starter-kit](https://github.com/mcnamee/react-native-starter-kit) by Matt McNamee: MIT License
* [Poppins](https://fonts.google.com/specimen/Poppins) font by Indian Type Foundry: SIL Open Font License 1.1
