import { FC } from "react";
import Service from "../../model/Service";
import moment from 'moment';

export interface ServiceListItemProps {
    service: Service,  
};

const ServiceListItem: FC<ServiceListItemProps> = (props: ServiceListItemProps) => {
    const { service } = props;

    const formattedDate = moment(service.date).format('DD-MMM-YYYY')

    return (
        <div>
            <p>{formattedDate} | {service.mileage} | {service.dealer}</p>
        </div>
    );
};

export default ServiceListItem;