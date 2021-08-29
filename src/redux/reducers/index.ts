import { combineReducers, Reducer } from "redux";
import ServicesReducer, { ServicesReducerStore } from "./ServiceReducer";

export interface ApplicationStore {
    servicesReducer: ServicesReducerStore;
}

export const reducers = (): Reducer<ApplicationStore> => combineReducers<ApplicationStore>({
    servicesReducer: ServicesReducer,
});
