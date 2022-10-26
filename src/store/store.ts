import { sidebarReducer } from './reducers/sidebar/slice';
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

export function makeStore() {
    return configureStore({
        reducer: {
            sidebarReducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
    })
}

export const store = makeStore()

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<AppStore['getState']>;

export const wrapper = createWrapper<AppStore>(makeStore)