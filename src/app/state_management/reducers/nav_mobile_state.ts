'use client';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface navValueInterface{
    value:string;
}

const initialValue: navValueInterface= {
    value:'home'
}

const navBgMobile= createSlice({
    name: "switch_mobile_type",
    initialState: initialValue,
    reducers: {
        setNavMobile: (state, args:PayloadAction<{action:string}>) => {
            state.value= args.payload.action;

        }
    }
});

export const{setNavMobile}= navBgMobile.actions;
export default navBgMobile.reducer;