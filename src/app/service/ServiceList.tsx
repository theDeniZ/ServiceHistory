import { FC } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Service from "../../model/Service";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ServiceListItem from "./ServiceListItem";

export interface ServiceListProps {
    services: Service[],
    selectedIndex: number,
    onSelectedIndex: (index: number) => void,
    onServiceDeleteAction: (index: number) => void,
};

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

const ServiceList: FC<ServiceListProps> = (props: ServiceListProps) => {
    const { services, selectedIndex, onSelectedIndex, onServiceDeleteAction } = props;

    const classes = useStyles();

    return (
        <div>
            <List component="nav" aria-label="main mailbox folders">
                {services && services.map((service, i) => {
                    return (
                        <ListItem 
                            key={i}
                            selected={i === selectedIndex}
                            onClick={() => {onSelectedIndex(i)}}
                        >
                            <ServiceListItem service={service} />
                            <IconButton 
                                aria-label="delete" 
                                className={classes.margin}
                                onClick={(event) => { 
                                    onServiceDeleteAction(i);
                                    event.stopPropagation();
                                }}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </ListItem>
                    )
                })}
            </List>
        </div>
    )
}

export default ServiceList;