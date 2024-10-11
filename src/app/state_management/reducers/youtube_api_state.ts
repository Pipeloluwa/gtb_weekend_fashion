'use client';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface navValueInterface{
    value:boolean;
}

const initialValue: navValueInterface= {
    value:false
}

const youtubeState= createSlice({
    name: "switch_youtube_state",
    initialState: initialValue,
    reducers: {
        setYoutubeState: (state, args: PayloadAction<{stateValue: boolean}>) => {
            state.value = args.payload.stateValue;
        }
    }
});

export const{setYoutubeState}= youtubeState.actions;
export default youtubeState.reducer;