import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SoundState {
    volume: number;
}

const initialState = {
    play: false,
    volume: 0.5,
};

export const soundSlice = createSlice({
    name: "sound",
    initialState,
    reducers: {
        PLAY_SOUND: (state) => {
            state.play = !state.play;
        },
        MUTE_SOUND: (state) => {
            state.volume = 0;
        },
        CHANGE_VOLUME: (state, action: PayloadAction<number>) => {
            state.volume = action.payload;
        },
    },
});

export const { PLAY_SOUND, MUTE_SOUND, CHANGE_VOLUME } = soundSlice.actions;

export const selectSoundState = (state) => state.sound;

export default soundSlice.reducer;
