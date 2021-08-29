import { FC } from "react";
import Service from "../../../model/Service";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ServiceListItem from "./ServiceListItem";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ServiceItem from "../../../model/ServiceItem";

export interface ServiceListProps {
    services: Service[],
    onServiceDeleteAction: (index: number) => void,
    onServiceDateUpdatedAction: (index: number, newValue: Date) => void,
    onServiceMileageUpdatedAction: (index: number, newValue: string) => void,
    onServiceDealerUpdatedAction: (index: number, newValue: string) => void,
    onServiceBMWUpdatedAction: (index: number, newValue: boolean) => void,
    onServiceItemsUpdatedAction: (index: number, newValue: ServiceItem[]) => void,
    onServiceMoveUpAction: (index: number) => void,
    onServiceMoveDownAction: (index: number) => void,
};

const useStyles = makeStyles((theme) => ({
    container: {},
    item: {
        width: '100%',
        margin: 'auto',
    },
    darker: {
        backgroundColor: '#ddd',
    },
}));


const ServiceList: FC<ServiceListProps> = (props: ServiceListProps) => {
    const { services } = props;

    const classes = useStyles();

    return (
        <List className={classes.container} component="nav" aria-label="main mailbox folders">
            {services && services.map((service, i) => {
                return (
                    <ListItem key={i} className={clsx(classes.item, i % 2 && classes.darker)}>
                        <ServiceListItem 
                            service={service} 
                            currentIndex={i} 
                            totalCount={services.length} 
                            {...props}
                        />
                    </ListItem>
                )
            })}
        </List>
    )
}

export default ServiceList;