import React, { FunctionComponent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationStore } from "../../redux/reducers";
import Button from '@material-ui/core/Button';
import { CreateServiceAction } from "../../redux/actions/ServiceAction";

const ServiceHistory: FunctionComponent = () => {

    const { serviceHistory } = useSelector((state: ApplicationStore) => ({
        serviceHistory: state.serviceHistoryReducer.serviceHistory,
    }));
    const dispatch = useDispatch();

    const createServie = () => {
        dispatch(CreateServiceAction());
    }

    return (
        <div>
            <p>History: {serviceHistory.history.length}</p>
            <Button variant="outlined" color="primary" onClick={createServie}>Add Service</Button>
        </div>
    )
};

export default ServiceHistory;
