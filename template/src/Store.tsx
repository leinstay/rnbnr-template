import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

import AsyncStorage from '@react-native-community/async-storage';
import ColorRandomizerReducer from './slices/ColorRandomizer';
import AlertManagerReducer from './slices/AlertManager';
import SessionsControllerReducer from './slices/SessionsController';

const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
};

const rootReducer = combineReducers({
    color: ColorRandomizerReducer,
    alert: AlertManagerReducer,
    session: SessionsControllerReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export default configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
