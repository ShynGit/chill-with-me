import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const rain = require("../../assets/sound/rain.mp3");
const thunder = require("../../assets/sound/thunder.mp3");

export interface SoundState {
    play: Boolean;
    volume: number;
    soundList: [
        {
            id: number;
            name: string;
            src: string;
            volume: number;
            iconPositionFill: string;
            iconPositionOutline: string;
        }
    ];
}

export interface Sound {
    sound: {
        id: number;
        name: string;
        src: string;
        volume: number;
        iconPositionFill: string;
        iconPositionOutline: string;
    };
}

const initialState = {
    play: false,
    volume: 0.5,
    soundList: [
        {
            id: 0,
            name: "Rain",
            src: rain,
            volume: 0,
            iconPositionFill: "0 -300px",
            iconPositionOutline: "-500px -500px",
        },
        {
            id: 1,
            name: "Thunder",
            src: thunder,
            volume: 0,
            iconPositionFill: "-400px -200px",
            iconPositionOutline: "-600px -500px",
        },
    ],
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
        CHANGE_GLOBAL_VOLUME: (state, action: PayloadAction<number>) => {
            state.volume = action.payload;
        },
        CHANGE_SOUND_VOLUME: (
            state,
            action: PayloadAction<{ id: number; volume: number }>
        ) => {
            state.soundList[action.payload.id].volume = action.payload.volume;
        },
    },
});

export const {
    PLAY_SOUND,
    MUTE_SOUND,
    CHANGE_GLOBAL_VOLUME,
    CHANGE_SOUND_VOLUME,
} = soundSlice.actions;

export const selectSoundState = (state: any) => state.sound;

export default soundSlice.reducer;
