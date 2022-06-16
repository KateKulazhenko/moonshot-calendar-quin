import { configureStore } from '@reduxjs/toolkit';
import { launchSlice } from './slice/launchSlice';

export const store = configureStore({
    reducer: {
        launches: launchSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch