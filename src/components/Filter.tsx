import React from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { changeFilter, changeItems, changeIsLoading } from '../app/slice/launchSlice';
import DatePicker from "react-datepicker";
import { fetchLaunchesAsync } from '../api';

import "react-datepicker/dist/react-datepicker.css";

export const Filter = () => {
    const dispatch = useAppDispatch();
    const filter = useAppSelector((state) => state.launches.filter);

    const handleChangeFilterDate = (date: Date, type: string) => {
        dispatch(changeIsLoading(true));

        const newDate = {...filter, [type]: date.toISOString()}
        dispatch(changeFilter(newDate));

        const params = {
            endDate: filter.endDate,
            startDate: filter.startDate,
        }
        const fetchData = async () => {
            let data = await fetchLaunchesAsync(params);
            dispatch(changeItems(data.results));
            dispatch(changeIsLoading(false));
        }

        fetchData();
    }
    
    return(
        <div className='filter-container'>
            <div className='filter-item'>
                <span className='filter-label'>Start Date</span>
                <DatePicker selected={new Date(filter.startDate)} onChange={(date: Date) => handleChangeFilterDate(date, 'startDate')} />
            </div>
            <div className='filter-item'>
                <span className='filter-label'>End Date</span>
                <DatePicker selected={new Date(filter.endDate)} onChange={(date: Date) => handleChangeFilterDate(date, 'endDate')} />
            </div>
        </div>
    );
}