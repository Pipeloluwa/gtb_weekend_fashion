'use client';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface INavAdminValue{
    value:string;
}

const initialValue: INavAdminValue= {
    value:''
}

const navAdminValue= createSlice({
    name: "nav-admin-value",
    initialState: initialValue,
    reducers: {
        setNavAdminValue: (state, args:PayloadAction<{action:string}>) => {
            state.value= args.payload.action;

        }
    }
});

export const{setNavAdminValue}= navAdminValue.actions;
export default navAdminValue.reducer;