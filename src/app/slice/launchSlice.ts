import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from '../../app/store'
import { CONFIG } from "../../config";

const initialState: ILaunch = {
    items: [],
    filter: {
       startDate: CONFIG.startDate,
       endDate: CONFIG.endDate,
    },
    isLoading: false
};

export const launchSlice = createSlice({
    name: 'launch',
    initialState,
    reducers: {
        changeItems: (state, action) => {
            state.items = action.payload
        },
        changeFilter: (state, action) => {
            state.filter = action.payload
        },
        changeIsLoading: (state, action) => {
            state.isLoading = action.payload
        }
    }
});

export const { changeItems, changeFilter, changeIsLoading } = launchSlice.actions;

export const selectLaunchItems = (state: RootState) => state.launches.items;