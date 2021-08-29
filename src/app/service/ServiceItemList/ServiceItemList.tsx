import Service from "../../../model/Service";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import ServiceItemListItem from "./ServiceItemListItem";
import ServiceItem from "../../../model/ServiceItem";

export interface ServiceItemListProps {
    service: Service,
    selectedServiceItemIndex: number,
    onSelectedServiceItem: (index: number) => void,
    onServiceItemDeleted: (index: number) => void,
    onServiceItemUpdated: (serviceItem: ServiceItem, index: number) => void,
};
 
const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));


const ServiceItemList: React.FC<ServiceItemListProps> = (props) => {
    const { service, onServiceItemUpdated, onServiceItemDeleted, onSelectedServiceItem, selectedServiceItemIndex } = props;

    const classes = useStyles();

    return (
        <>
            <List component="nav" aria-label="main mailbox folders">
                {service && service.items && service.items.map((serviceItem, i) => {
                    return (
                        <ListItem 
                            key={i}
                            selected={i === selectedServiceItemIndex}
                            onClick={() => {onSelectedServiceItem(i)}}
                        >
                            <ServiceItemListItem item={serviceItem} onServiceItemUpdated={(item) => { onServiceItemUpdated(item, i) }} />
                            <IconButton 
                                aria-label="delete" 
                                className={classes.margin}
                                onClick={(event) => { 
                                    onServiceItemDeleted(i);
                                    event.stopPropagation();
                                }}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </ListItem>
                    )
                })}
            </List>
        </>
    );
}
 
export default ServiceItemList;