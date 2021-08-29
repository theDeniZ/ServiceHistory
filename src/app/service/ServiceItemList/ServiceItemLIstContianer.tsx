import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import ServiceItem from "../../../model/ServiceItem";
import { getSelectedService } from "../../../model/Utils";
import { CreateServiceItemAction, SelectedServiceItemUpdatedAction, ServiceItemDeletedAction, ServiceItemSelectedAction } from "../../../redux/actions/ServiceAction";
import { ApplicationStore } from "../../../redux/reducers";
import ServiceItemList from "./ServiceItemList";
import Button from '@material-ui/core/Button';

const ServiceItemListContainer: FC = () => {

    const { selectedService , selectedServiceItemIndex} = useSelector((store: ApplicationStore) => ({
        selectedService: getSelectedService(store),
        selectedServiceItemIndex: store.serviceHistoryReducer.selectedServiceItemIndex,
    }));

    const dispatch = useDispatch();

    const onSelectedServiceItem = (index: number) => {
        dispatch(ServiceItemSelectedAction(index));
    };

    const onServiceItemDeleted = (index: number) => {
        dispatch(ServiceItemDeletedAction(index));
    };

    const onServiceItemUpdated = (serviceItem: ServiceItem, index: number) => {
        dispatch(SelectedServiceItemUpdatedAction(serviceItem));
    };

    const serviceList = selectedService && <ServiceItemList 
        service={selectedService}
        selectedServiceItemIndex={selectedServiceItemIndex}
        onSelectedServiceItem={onSelectedServiceItem}
        onServiceItemDeleted={onServiceItemDeleted}
        onServiceItemUpdated={onServiceItemUpdated}
    />

    const createServiceItemAction = () => {
        dispatch(CreateServiceItemAction());
    };

    const addServiceItem = selectedService && <Button variant="outlined" color="primary" onClick={createServiceItemAction}>Add Service</Button>;

    return (<>
        { addServiceItem }
        { serviceList }
    </>);
}
 
export default ServiceItemListContainer;