import Service from '../../model/Service';
import {SERVICES_AVAILABLE} from './ServiceActionTypes';

export interface ServicesAvailable {
    type: typeof SERVICES_AVAILABLE;
    payload: Service[];
}
export const ServicesAvailableAction = (services: Service[]): ServicesAvailable => {
  return {
    type: SERVICES_AVAILABLE,
    payload: services,
  };
};

export type DispatchedServicesAction =
    | ServicesAvailable;
