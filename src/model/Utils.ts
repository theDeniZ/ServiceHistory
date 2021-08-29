import { ApplicationStore } from '../redux/reducers';
import Service from './Service';
import { getServiceAtIndex } from './ServiceHistory';

export const determineSelectedIndexAfterArrayModification = (oldIndex: number, array: Object[]): number => {
    return array.length > oldIndex ? oldIndex : array.length - 1;
};

export const getSelectedService = (store: ApplicationStore): Service | null => {
    return getServiceAtIndex(store.serviceHistoryReducer.serviceHistory, store.serviceHistoryReducer.selectedServiceIndex);
};

export const getSelectedServiceItem = (store: ApplicationStore): Service | null => {
    return getServiceAtIndex(store.serviceHistoryReducer.serviceHistory, store.serviceHistoryReducer.selectedServiceIndex);
};