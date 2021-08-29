import { createService, deleteServiceItemAtIndex } from "../../model/Service";
import { determineSelectedIndexAfterArrayModification } from "../../model/Utils";
import ServiceHistory, { addServiceItemToHistory, addServiceToHistory, deleteServiceFromHistory, updateServiceAtIndex, updateServiceItemAtSelectedServiceAtIndex } from "../../model/ServiceHistory";
import { DispatchedServiceHistoryAction } from "../actions/ServiceAction"
import { CREATE_SERVICE, CREATE_SERVICE_ITEM, SELECTED_SERVICE_ITEM_UPDATED, SELECTED_SERVICE_UPDATED, SERVICE_DELETED, SERVICE_HISTORY_AVAILABLE, SERVICE_ITEM_DELETED, SERVICE_ITEM_SELECTED, SERVICE_SELECTED } from "../actions/ServiceActionTypes"

export interface ServiceHistoryReducerStore {
    serviceHistory: ServiceHistory;
    selectedServiceIndex: number;
    selectedServiceItemIndex: number;
}

export const serviceHistoryReducerInitialState: ServiceHistoryReducerStore = {
    serviceHistory: {history: []},
    selectedServiceIndex: 0,
    selectedServiceItemIndex: 0,
}

const ServiceHistoryReducer = (state = serviceHistoryReducerInitialState, action: DispatchedServiceHistoryAction): ServiceHistoryReducerStore => {
    switch (action.type) {
        case SERVICE_HISTORY_AVAILABLE:
            return {
                ...state,
                serviceHistory: action.payload,
            };
        case CREATE_SERVICE:
            return {
                ...state,
                serviceHistory: addServiceToHistory(createService(), state.serviceHistory),
            };
        case SERVICE_SELECTED:
            const newServiceIndex = determineSelectedIndexAfterArrayModification(action.payload, state.serviceHistory.history);
            return {
                ...state,
                selectedServiceIndex: newServiceIndex,
            };
        case SELECTED_SERVICE_UPDATED:
            return {
                ...state,
                serviceHistory: updateServiceAtIndex(state.serviceHistory, action.payload, state.selectedServiceIndex),
            };
        case SERVICE_DELETED:
            const newServiceHistory = deleteServiceFromHistory(action.payload, state.serviceHistory);
            const newIndex = determineSelectedIndexAfterArrayModification(state.selectedServiceIndex, newServiceHistory.history);
            return {
                ...state,
                serviceHistory: newServiceHistory,
                selectedServiceIndex: newIndex,
            };
        case CREATE_SERVICE_ITEM:
            return {
                ...state,
                serviceHistory: addServiceItemToHistory(state.serviceHistory, state.selectedServiceIndex),
            };
        case SERVICE_ITEM_SELECTED:
            return {
                ...state,
                selectedServiceItemIndex: action.payload,
            };
        case SELECTED_SERVICE_ITEM_UPDATED:
            return {
                ...state,
                serviceHistory: updateServiceItemAtSelectedServiceAtIndex(state.serviceHistory, action.payload, state.selectedServiceIndex, state.selectedServiceItemIndex),
            };
        case SERVICE_ITEM_DELETED:
            const newService = deleteServiceItemAtIndex(state.serviceHistory.history[state.selectedServiceIndex], action.payload);
            const newItemIndex = determineSelectedIndexAfterArrayModification(state.selectedServiceIndex, newService.items);
            return {
                ...state,
                serviceHistory: updateServiceAtIndex(state.serviceHistory, newService, state.selectedServiceIndex),
                selectedServiceItemIndex: newItemIndex,
            };
        default:
            return {
                ...state,
            };
    }
};
export default ServiceHistoryReducer;