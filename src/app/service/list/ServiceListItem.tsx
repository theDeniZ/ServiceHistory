import { FC } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Service from "../../../model/Service";
import DateInput from "../../shared/DateInput";
import TextInput from "../../shared/TextInput";
import ServiceListItemActions from "./ServiceListItemActions";
import CheckboxInput from "../../shared/CheckboxInput";
import ServiceItem from "../../../model/ServiceItem";
import ServiceItems from "../serviceItems/ServiceItems";
import { Grid } from "@material-ui/core";

export interface ServiceListItemProps {
    currentIndex: number,
    totalCount: number,
    service: Service,
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
    root: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    margin: {
      margin: theme.spacing(1),
    },
    actions: {
        display: 'inline',
    },
}));

const ServiceListItem: FC<ServiceListItemProps> = (props: ServiceListItemProps) => {
    const { 
        service, 
        currentIndex, 
        onServiceDateUpdatedAction, 
        onServiceMileageUpdatedAction, 
        onServiceDealerUpdatedAction,
        onServiceBMWUpdatedAction,
        onServiceItemsUpdatedAction,
    } = props;

    const classes = useStyles();

    const onDateUpdateAction = (date: Date) => {
        onServiceDateUpdatedAction(currentIndex, date);
    };

    const onMileageUpdateAction = (mileage: string) => {
        onServiceMileageUpdatedAction(currentIndex, mileage);
    };

    const onDealerUpdateAction = (dealer: string) => {
        onServiceDealerUpdatedAction(currentIndex, dealer);
    };

    const onBMWUpdateAction = (bmw: boolean) => {
        onServiceBMWUpdatedAction(currentIndex, bmw);
    };

    const onItemsUpdateAction = (items: ServiceItem[]) => {
        onServiceItemsUpdatedAction(currentIndex, items);
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <DateInput className={classes.margin} value={service.date} onChange={onDateUpdateAction}>Date of service</DateInput>
                    <TextInput className={classes.margin} value={service.mileage} onChange={onMileageUpdateAction}>Mileage</TextInput>
                    <TextInput className={classes.margin} value={service.dealer} onChange={onDealerUpdateAction}>Dealer</TextInput>
                    <CheckboxInput className={classes.margin} value={service.bmw} onChange={onBMWUpdateAction}>BMW</CheckboxInput>
                    <ServiceListItemActions className={classes.actions} {...props} />
                </Grid>
                <Grid item xs={12}>
                    <ServiceItems serviceItems={service.items} onServiceItemsChanged={onItemsUpdateAction} />
                </Grid>
            </Grid>
        </div>
    );
};

export default ServiceListItem;