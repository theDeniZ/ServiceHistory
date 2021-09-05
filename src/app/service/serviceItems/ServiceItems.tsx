import { Button, List, ListItem } from "@material-ui/core";
import ServiceItem, { createServiceItemObject } from "../../../model/ServiceItem";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ServiceItemListItem from "./ServiceItemListItem";
import { ServiceType } from "../../../model/ServiceType";

export interface ServiceItemsProps {
    serviceItems: ServiceItem[];
    onServiceItemsChanged: (items: ServiceItem[]) => void;
}

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


const ServiceItems: React.FC<ServiceItemsProps> = (props) => {
    const { serviceItems, onServiceItemsChanged } = props;

    const classes = useStyles();

    const onTypeChangedAtIndexAction = (newType: ServiceType, index: number) => {
        const newServiceItems = [ ...serviceItems ];
        newServiceItems[index].serviceType = newType;
        onServiceItemsChanged(newServiceItems);
    };

    const onServiceItemCreateAction = () => {
        const newServiceItems = [ createServiceItemObject(), ...serviceItems ];
        onServiceItemsChanged(newServiceItems);
    };

    const onServiceItemDeleted = (index: number) => {
        const newServiceItems = [ ...serviceItems.slice(0, index), ...serviceItems.slice(index + 1) ];
        onServiceItemsChanged(newServiceItems);
    };

    return (
        <>
            <Button variant="outlined" color="primary" onClick={onServiceItemCreateAction}>Add Service Item</Button>
            <List className={classes.container} component="nav" aria-label="main mailbox folders">
                {serviceItems && serviceItems.map((serviceItem, i) => {
                    return (
                        <ListItem key={i} className={clsx(classes.item, i % 2 && classes.darker)}>
                            <ServiceItemListItem 
                                serviceItem={serviceItem} 
                                onServiceTypeChanged={(newType) => onTypeChangedAtIndexAction(newType, i)}
                                onServiceItemDeleted={() => onServiceItemDeleted(i)}
                            />
                        </ListItem>
                    )
                })}
            </List>
        </>
     );
}
 
export default ServiceItems;