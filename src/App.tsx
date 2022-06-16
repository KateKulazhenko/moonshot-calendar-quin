import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { fetchLaunchesAsync } from './api';
import { changeItems, changeIsLoading } from './app/slice/launchSlice';
import { Map } from './components/Map';
import { Filter } from './components/Filter';
import { CONFIG } from './config';

import './App.css';
import { LoadingSpinner } from './components/Loader';

function App() {
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector((state) => state.launches.isLoading);

    useEffect(() => {
        dispatch(changeIsLoading(true));
        const params = {
            endDate: CONFIG.endDate,
            startDate: CONFIG.startDate,
            limit: CONFIG.limit,
        }

        const fetchData = async () => {
            let data = await fetchLaunchesAsync(params);
            dispatch(changeItems(data.results));
            dispatch(changeIsLoading(false));
        }

        fetchData();
    }, [dispatch]);

    return (
        !isLoading
        ? <div className="App">
            <Filter />
            <Map />
        </div>
        : <LoadingSpinner />

    );
}

export default App;
