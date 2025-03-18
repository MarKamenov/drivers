import { Driver, Trace } from "@/types/drivers";

export const filterDrivers = (drivers: Driver[], filter: string) => {
    return drivers.filter(driver => {
        const fullName = `${driver.forename} ${driver.surname}`.toLowerCase();
        const registration = driver.vehicleRegistration.toLowerCase();
        const term = filter.toLowerCase();

        return fullName.includes(term) || registration.includes(term);
    });
};

export const calculateDriverStats = (traces: Trace[]) => {
    return traces.reduce(
        (acc, trace) => {
            trace.activity.forEach(activity => {
                acc.activityByType[activity.type] += activity.duration;
                acc.totalMinutes += activity.duration;
            });
            return acc;
        },
        {
            totalMinutes: 0,
            activityByType: {
                drive: 0,
                rest: 0,
                work: 0,
                available: 0,
            },
        }
    );
};

// Memoized debounce function
export const debounce = <T extends unknown[], U>(func: (...args: T) => PromiseLike<U> | U, wait: number) => {
    let timeout: ReturnType<typeof setTimeout> | undefined;
    return (...args: T) => {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => func(...args), wait);
    };
};
