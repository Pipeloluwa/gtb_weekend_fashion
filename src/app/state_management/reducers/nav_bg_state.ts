'use client';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface navValueInterface{
    value:boolean;
}

const initialValue: navValueInterface= {
    value:false
}

const navBg= createSlice({
    name: "switch_nav_bg",
    initialState: initialValue,
    reducers: {
        setNavBg: (state, args: PayloadAction<{scrollValue: number | undefined}>) => {
            if (args.payload.scrollValue)
            {
                if (args.payload.scrollValue > 5 && state.value=== false){
                    state.value= true;
                }
    
                else if(args.payload.scrollValue <= 5 && state.value === true ){
                    state.value= false;
                }
            }
            
        },

        setNavBgManual: (state, args: PayloadAction<{navValue: boolean}>) => {
            state.value= args.payload.navValue;
        }
    }
});

export const{setNavBg, setNavBgManual}= navBg.actions;
export default navBg.reducer;