interface ILaunch {
    items: ILaunchItem[];
    filter: IFilter;
    isLoading: boolean
}

interface IFilter {
    endDate: string;
    startDate: string;
}

interface ILaunchItem {
    failreason: string;
    hashtag: null
    holdreason: string;
    id:string;
    image: string;
    infographic: null
    last_updated: string;
    launch_service_provider: {
        id: number;
        url: string;
        name: string;
        type: string;
    }
    mission: {
        description: string;
        id: number;
        launch_designator: unknown;
        name: string;
        orbit: {
            abbrev: string;
            id: number;
            name: string;
        };
        type: string;
    }
    name: string;
    net: string;
    pad: {
        id: number;
        url: string;
        agency_id: unknown;
        name: string;
        info_url: unknown;
        wiki_url: string;
        map_url: string;
        latitude: string;
        longitude: string;
        location: {
            id: number;
            url: string;
            name: string;
            country_code: string;
            map_image: string;
            total_launch_count: number;
            total_landing_count: number;
        }
        map_image(pin): string;
        total_launch_count: number;
    };
    probability: number;
    program: Array;
    rocket: {
        id: number;
        configuration: {
            family: string;
            full_name: string;
            id: number;
            name: string;
            url: string;
            variant: string;
        }
    }
    slug: string;
    status: {
        id: number;
        name: string;
        abbrev: string;
        description: string;
    }
    url: string;
    webcast_live: boolean;
    window_end: string;
    window_start: string;
}
