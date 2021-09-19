import Service from '../../model/Service';
import {DispatchedServicesAction} from '../actions/ServiceAction';
import {SERVICES_AVAILABLE} from '../actions/ServiceActionTypes';

export interface ServicesReducerStore {
    services: Service[];
}

export const servicesReducerInitialState: ServicesReducerStore = {
  services: [],
};

const ServicesReducer = (
    state = servicesReducerInitialState,
    action: DispatchedServicesAction,
): ServicesReducerStore => {
  switch (action.type) {
    case SERVICES_AVAILABLE:
      return {
        ...state,
        services: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
export default ServicesReducer;
