import { AnyAction } from "redux"
import { ThunkDispatch } from "redux-thunk"
import Service, { createServiceObject } from "../../model/Service";
import { ServicesAvailableAction } from "../actions/ServiceAction";
import { ApplicationStore } from "../reducers"

export const createServiceThunk = () => (dispatch: ThunkDispatch<ApplicationStore, null, AnyAction>, getState: () => ApplicationStore) => {
    const newServices: Service[] = [
        createServiceObject(),
        ...getState().servicesReducer.services,
    ];
    dispatch(ServicesAvailableAction(newServices));
};

export const updateServiceAtIndexThunk = (service: Service, index: number) => (dispatch: ThunkDispatch<ApplicationStore, null, AnyAction>, getState: () => ApplicationStore) => {
    const oldServices = getState().servicesReducer.services;
    const newServices: Service[] = [
        ...oldServices.slice(0, index),
        service,
        ...oldServices.slice(index + 1),
    ];
    dispatch(ServicesAvailableAction(newServices));
};

export const deleteServiceAtIndexThunk = (index: number) => (dispatch: ThunkDispatch<ApplicationStore, null, AnyAction>, getState: () => ApplicationStore) => {
    const oldServices = getState().servicesReducer.services;
    const newServices: Service[] = [
        ...oldServices.slice(0, index),
        ...oldServices.slice(index + 1),
    ];
    dispatch(ServicesAvailableAction(newServices));
};

export const updateServiceDateAtIndexThunk = (index: number, newValue: Date) => (dispatch: ThunkDispatch<ApplicationStore, null, AnyAction>, getState: () => ApplicationStore) => {
    const oldService = getState().servicesReducer.services[index];
    if (!oldService) {
        return
    }
    const newService: Service = {
        ...oldService,
        date: newValue,
    };
    dispatch(updateServiceAtIndexThunk(newService, index));
};

export const updateServiceMileageAtIndexThunk = (index: number, newValue: string) => (dispatch: ThunkDispatch<ApplicationStore, null, AnyAction>, getState: () => ApplicationStore) => {
    const oldService = getState().servicesReducer.services[index];
    if (!oldService) {
        return
    }
    const newService: Service = {
        ...oldService,
        mileage: +newValue || oldService.mileage,
    };
    dispatch(updateServiceAtIndexThunk(newService, index));
};

export const updateServiceDealerAtIndexThunk = (index: number, newValue: string) => (dispatch: ThunkDispatch<ApplicationStore, null, AnyAction>, getState: () => ApplicationStore) => {
    const oldService = getState().servicesReducer.services[index];
    if (!oldService) {
        return
    }
    const newService: Service = {
        ...oldService,
        dealer: newValue,
    };
    dispatch(updateServiceAtIndexThunk(newService, index));
};

// Swap
const swapArrayItemsAt = (array: Object[], i: number, j: number) => {
    var b = array[i];
    array[i] = array[j];
    array[j] = b;
    return array;
};

export const moveServiceUpwardsAtIndexThunk = (index: number) => (dispatch: ThunkDispatch<ApplicationStore, null, AnyAction>, getState: () => ApplicationStore) => {
    const newServices: Service[] = [ ...getState().servicesReducer.services ];
    if (index <= 0 || index >= newServices.length ) {
        return;
    }
    swapArrayItemsAt(newServices, index, index - 1);
    dispatch(ServicesAvailableAction(newServices));
};

export const moveServiceDownwardsAtIndexThunk = (index: number) => (dispatch: ThunkDispatch<ApplicationStore, null, AnyAction>, getState: () => ApplicationStore) => {
    const newServices: Service[] = [ ...getState().servicesReducer.services ];
    if (index < 0 || index >= newServices.length - 1) {
        return;
    }
    swapArrayItemsAt(newServices, index, index + 1);
    dispatch(ServicesAvailableAction(newServices));
};