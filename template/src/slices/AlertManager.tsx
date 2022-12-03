import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '../Types';

const initialState = {
    status: false,
} as AppState['alert'];

export const colorRandomizerSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        openModal: (state, actions) => {
            actions.payload.status = true;
            return {
                ...state,
                ...actions.payload,
            };
        },
        closeModal: state => {
            state.status = false;
        },
    },
});

export const { openModal, closeModal } = colorRandomizerSlice.actions;
export const getModalState = (state: AppState) => state.alert;

export default colorRandomizerSlice.reducer;
