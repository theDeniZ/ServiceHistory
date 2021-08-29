import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationStore } from "../../../redux/reducers";
import { deleteServiceAtIndexThunk, moveServiceDownwardsAtIndexThunk, moveServiceUpwardsAtIndexThunk, updateServiceBMWAtIndexThunk, updateServiceDateAtIndexThunk, updateServiceDealerAtIndexThunk, updateServiceMileageAtIndexThunk } from "../../../redux/thunks/ServiceThunk";
import ServiceList from "./ServiceList";


const ServiceListContainer: FC = () => {
    const { services } = useSelector((store: ApplicationStore) => store.servicesReducer);
    const dispatch = useDispatch();

    const onServiceDeleteAction = (index: number) => {
        dispatch(deleteServiceAtIndexThunk(index));
    };

    const onServiceDateUpdatedAction = (index: number, newValue: Date) => {
        dispatch(updateServiceDateAtIndexThunk(index, newValue));
    };

    const onServiceMileageUpdatedAction = (index: number, newValue: string) => {
        dispatch(updateServiceMileageAtIndexThunk(index, newValue));
    };

    const onServiceDealerUpdatedAction = (index: number, newValue: string) => {
        dispatch(updateServiceDealerAtIndexThunk(index, newValue));
    };

    const onServiceBMWUpdatedAction = (index: number, newValue: boolean) => {
        dispatch(updateServiceBMWAtIndexThunk(index, newValue));
    };

    const onServiceMoveUpAction = (index: number) => {
        dispatch(moveServiceUpwardsAtIndexThunk(index));
    };

    const onServiceMoveDownAction = (index: number) => {
        dispatch(moveServiceDownwardsAtIndexThunk(index));
    };

    return ( 
        <>
            <ServiceList 
                services={services} 
                onServiceDeleteAction={onServiceDeleteAction}
                onServiceDateUpdatedAction={onServiceDateUpdatedAction}
                onServiceDealerUpdatedAction={onServiceDealerUpdatedAction}
                onServiceMileageUpdatedAction={onServiceMileageUpdatedAction}
                onServiceMoveUpAction={onServiceMoveUpAction}
                onServiceMoveDownAction={onServiceMoveDownAction}
                onServiceBMWUpdatedAction={onServiceBMWUpdatedAction}
            />
        </>
     );
}
 
export default ServiceListContainer;