import { Driver } from "@/types/drivers";

export interface DriversState {
    drivers: Driver[],
    filter: string,
}
export type DriversActions =
    | { type: 'SET_DRIVERS'; payload: Driver[] }
    | { type: 'SET_FILTER'; payload: string }

export const enum DriversTypes {
    setDrivers = 'SET_DRIVERS',
    setFilter = 'SET_FILTER',
}