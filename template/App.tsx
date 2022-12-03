import 'react-native-gesture-handler';

import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Cards from './src/screens/Cards';
import Gallery from './src/screens/Gallery';
import Forms from './src/screens/Forms';
import Session from './src/screens/Session';
import AppBar from './src/components/AppBar';
import Modal from './src/components/Modal';
import { theme } from './src/Theme';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './src/Store';

import type { NavigatorScreens } from './src/Types';

let persistor = persistStore(store);

const Drawer = createDrawerNavigator<NavigatorScreens>();

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NativeBaseProvider theme={theme}>
                    <NavigationContainer>
                        <Drawer.Navigator initialRouteName="Cards" screenOptions={{ header: props => <AppBar {...props} /> }}>
                            <Drawer.Screen options={{ title: 'Cards / Grid / Local images' }} name={'Cards'} component={Cards} />
                            <Drawer.Screen options={{ title: 'Gallery features / External images' }} name={'Gallery'} component={Gallery} />
                            <Drawer.Screen options={{ title: 'Forms / Text / Validation' }} name={'Forms'} component={Forms} />
                            <Drawer.Screen options={{ title: 'State persistence / File access' }} name={'Session'} component={Session} />
                        </Drawer.Navigator>
                    </NavigationContainer>
                    <Modal />
                </NativeBaseProvider>
            </PersistGate>
        </Provider>
    );
}
