import Service from "../../model/Service";
import ServiceHistory from "../../model/ServiceHistory";
import ServiceItem from "../../model/ServiceItem";
import { CREATE_SERVICE, CREATE_SERVICE_ITEM, SELECTED_SERVICE_ITEM_UPDATED, SELECTED_SERVICE_UPDATED, SERVICE_DELETED, SERVICE_HISTORY_AVAILABLE, SERVICE_ITEM_DELETED, SERVICE_ITEM_SELECTED, SERVICE_SELECTED } from "./ServiceActionTypes";

export interface ServiceHistoryAvailable {
    type: typeof SERVICE_HISTORY_AVAILABLE;
    payload: ServiceHistory;
}
export const ServiceHistoryAvailableAction = (serviceHistory: ServiceHistory): ServiceHistoryAvailable => {
    return {
        type: SERVICE_HISTORY_AVAILABLE,
        payload: serviceHistory,
    };
};


export interface CreateService {
    type: typeof CREATE_SERVICE;
}
export const CreateServiceAction = (): CreateService => {
    return {
        type: CREATE_SERVICE,
    };
};


export interface ServiceSelected {
    type: typeof SERVICE_SELECTED;
    payload: number;
}
export const ServiceSelectedAction = (selected: number): ServiceSelected => {
    return {
        type: SERVICE_SELECTED,
        payload: selected,
    };
};


export interface SelectedServiceUpdated {
    type: typeof SELECTED_SERVICE_UPDATED;
    payload: Service;
}
export const SelectedServiceUpdatedAction = (service: Service): SelectedServiceUpdated => {
    return {
        type: SELECTED_SERVICE_UPDATED,
        payload: service,
    };
};


export interface ServiceDeleted {
    type: typeof SERVICE_DELETED;
    payload: number;
}
export const ServiceDeletedAction = (deleted: number): ServiceDeleted => {
    return {
        type: SERVICE_DELETED,
        payload: deleted,
    };
};



////



export interface CreateServiceItem {
    type: typeof CREATE_SERVICE_ITEM;
}
export const CreateServiceItemAction = (): CreateServiceItem => {
    return {
        type: CREATE_SERVICE_ITEM,
    };
};


export interface ServiceItemSelected {
    type: typeof SERVICE_ITEM_SELECTED;
    payload: number;
}
export const ServiceItemSelectedAction = (selected: number): ServiceItemSelected => {
    return {
        type: SERVICE_ITEM_SELECTED,
        payload: selected,
    };
};


export interface SelectedServiceItemUpdated {
    type: typeof SELECTED_SERVICE_ITEM_UPDATED;
    payload: ServiceItem;
}
export const SelectedServiceItemUpdatedAction = (serviceItem: ServiceItem): SelectedServiceItemUpdated => {
    return {
        type: SELECTED_SERVICE_ITEM_UPDATED,
        payload: serviceItem,
    };
};


export interface ServiceItemDeleted {
    type: typeof SERVICE_ITEM_DELETED;
    payload: number;
}
export const ServiceItemDeletedAction = (deleted: number): ServiceItemDeleted => {
    return {
        type: SERVICE_ITEM_DELETED,
        payload: deleted,
    };
};


export type DispatchedServiceHistoryAction = 
    | ServiceHistoryAvailable
    | CreateService
    | ServiceSelected
    | ServiceDeleted
    | SelectedServiceUpdated
    | CreateServiceItem
    | ServiceItemSelected
    | ServiceItemDeleted
    | SelectedServiceItemUpdated;