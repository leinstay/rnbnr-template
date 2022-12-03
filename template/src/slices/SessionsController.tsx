import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '../Types';
import MD5 from 'crypto-js/md5';

const initialState = {
    status: false,
} as AppState['session'];

export const SessionsControllerSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        setSession: (state, actions) => {
            actions.payload.password = MD5(actions.payload.password).toString();
            return {
                ...state,
                ...actions.payload,
            };
        },
        setAvatar: (state, actions) => {
            return {
                ...state,
                ...actions.payload,
            };
        },
        removeAvatar: state => {
            state = { ...state };
            delete state.avatar;

            return {
                ...state,
            };
        },
        clearSession: () => initialState,
    },
});

export const { setSession, clearSession, setAvatar, removeAvatar } = SessionsControllerSlice.actions;
export const getSession = (state: AppState) => state.session;
export const getAvatar = (state: AppState) => state.session.avatar;

export default SessionsControllerSlice.reducer;
