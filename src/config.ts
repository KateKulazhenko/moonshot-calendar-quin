import { addMonths } from './helper';

export const CONFIG = {
    startDate: new Date().toISOString(),
    endDate: addMonths(3).toISOString(),
    limit: 10
}
