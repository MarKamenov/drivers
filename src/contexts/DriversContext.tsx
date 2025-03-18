import { createContext, ReactNode, useEffect, useReducer, useCallback, useMemo, use } from "react";
import { Nullable } from "@/types/common";
import { Driver } from "@/types/drivers";
import { driversReducer } from "@/reducers/driversReducer";
import driversData from "@/data/drivers.json";
import { DriversState, DriversTypes } from "@/reducers/types";

export interface DriversContext extends DriversState {
    searchDriver: (value: string) => void;
}

const DriversContext = createContext<Nullable<DriversContext>>(null);

export const DriversProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(driversReducer, {
        drivers: [],
        filter: "",
    });

    const searchDriver = useCallback((search: string) => {
        dispatch({ type: DriversTypes.setFilter, payload: search });
    }, []);

    useEffect(() => {
        dispatch({ type: DriversTypes.setDrivers, payload: driversData.data as Driver[] });
    }, []);

    const contextValue = useMemo(() => ({
        ...state,
        searchDriver
    }), [state, searchDriver]);

    return (
        <DriversContext value={contextValue}>
            {children}
        </DriversContext>
    );
};

export const useDrivers = () => {
    const context = use(DriversContext);
    if (!context) {
        throw new Error("useDrivers must be used within a DriversProvider");
    }
    return context;
};