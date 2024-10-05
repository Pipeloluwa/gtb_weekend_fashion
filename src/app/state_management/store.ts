import { configureStore } from '@reduxjs/toolkit'
import nav_mobile_state from  "./reducers/nav_mobile_state";
import nav_bg_state from "./reducers/nav_bg_state";

export const Store = configureStore(
    {
        reducer: {
            nav_mobile_state: nav_mobile_state,
            nav_bg_state: nav_bg_state
        }
    }
);

export type RootState= ReturnType<typeof Store.getState>;
export type AppDispatch= typeof Store.dispatch;
