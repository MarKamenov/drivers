import { DriversState, DriversActions, DriversTypes } from "@/reducers/types";


export const driversReducer = (state: DriversState, action: DriversActions) => {
    switch (action.type) {
        case DriversTypes.setDrivers:
            return {
                ...state,
                drivers: action.payload,
            };
        case DriversTypes.setFilter:
            return {
                ...state,
                filter: action.payload,
            };
        default:
            return state;
    }
};