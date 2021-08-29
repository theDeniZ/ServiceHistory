import { useSelector, useDispatch } from 'react-redux';
import Service from '../../model/Service';
import { getSelectedService } from '../../model/Utils';
import { SelectedServiceUpdatedAction } from '../../redux/actions/ServiceAction';
import { ApplicationStore } from '../../redux/reducers';
import ServiceItem from './ServiceItem';

 
const ServiceItemContainer: React.FC = () => {
    const {service} = useSelector((store: ApplicationStore) => ({
        service: getSelectedService(store),
    }));
    const dispatch = useDispatch();

    const onServiceUpdated = (service: Service) => {
        dispatch(SelectedServiceUpdatedAction(service));
    };

    if (!service) {
        return (<></>);
    }

    return (
        <>
            <ServiceItem service={service} onServiceUpdated={onServiceUpdated} />
        </>
     );
}
 
export default ServiceItemContainer;