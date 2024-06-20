
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

import OGB_User_Reducer from "./features/OGB_User";
import OGB_Notes_Reducer from "./features/OGB_Notes";
import Passive_State_Reducer from "./features/Passive_State";

export const store = configureStore({
    reducer: {
        Passive_State_Reducer,
        OGB_User_Reducer,
        OGB_Notes_Reducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
