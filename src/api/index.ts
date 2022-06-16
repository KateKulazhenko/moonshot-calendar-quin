const BASE_URL = 'https://lldev.thespacedevs.com/2.2.0/';

export const fetchLaunchesAsync = async (params: IFilter) => {
    try {
        const res = await fetch(`${BASE_URL}launch/?window_end__gte=${params.endDate}&window_start__gte=${params.startDate}&limit=100`);
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
    } catch (error) {
        return {error: 'Unanable to retrive data'};
    }
}
