import { combineReducers, Reducer } from "redux";
import ServiceHistoryReducer, { ServiceHistoryReducerStore } from "./ServiceReducer";

export interface ApplicationStore {
    serviceHistoryReducer: ServiceHistoryReducerStore;
}

export const reducers = (): Reducer<ApplicationStore> => combineReducers<ApplicationStore>({
    serviceHistoryReducer: ServiceHistoryReducer
});
