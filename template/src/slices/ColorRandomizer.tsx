import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '../Types';

const initialState = {
    value: 'rgb(38, 38, 38)',
} as AppState['color'];

const randomRgb = (): AppState['color']['value'] => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
};

export const colorRandomizerSlice = createSlice({
    name: 'color',
    initialState,
    reducers: {
        revertColor: () => initialState,
        setRandomColor: state => {
            state.value = randomRgb();
        },
    },
});

export const { revertColor, setRandomColor } = colorRandomizerSlice.actions;
export const getRandomColor = (state: AppState) => state.color.value;

export default colorRandomizerSlice.reducer;
