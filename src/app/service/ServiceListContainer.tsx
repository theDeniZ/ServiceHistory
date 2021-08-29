import { FunctionComponent } from "react";
import { ApplicationStore } from "../../redux/reducers";
import ServiceList from "./ServiceList";
import { useSelector, useDispatch } from 'react-redux';
import { ServiceDeletedAction, ServiceSelectedAction } from "../../redux/actions/ServiceAction";

const ServiceListContainer: FunctionComponent = () => {
    const { services, selectedService } = useSelector((store: ApplicationStore) => ({
        services: store.serviceHistoryReducer.serviceHistory.history,
        selectedService: store.serviceHistoryReducer.selectedServiceIndex,
    }))

    const dispatch = useDispatch();

    const onServiceSelected = (index: number) => {
        index !== selectedService && dispatch(ServiceSelectedAction(index));
    }

    const onServiceDeleteAction = (index: number) => {
        dispatch(ServiceDeletedAction(index));
    }

    return <ServiceList 
        services={services} 
        selectedIndex={selectedService} 
        onSelectedIndex={onServiceSelected}
        onServiceDeleteAction={onServiceDeleteAction}
         />
}

export default ServiceListContainer;