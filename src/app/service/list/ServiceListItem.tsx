import { FC } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Service from "../../../model/Service";
import DateInput from "../../shared/DateInput";
import TextInput from "../../shared/TextInput";
import ServiceListItemActions from "./ServiceListItemActions";

export interface ServiceListItemProps {
    currentIndex: number,
    totalCount: number,
    service: Service,
    onServiceDeleteAction: (index: number) => void,
    onServiceDateUpdatedAction: (index: number, newValue: Date) => void,
    onServiceMileageUpdatedAction: (index: number, newValue: string) => void,
    onServiceDealerUpdatedAction: (index: number, newValue: string) => void,
    onServiceMoveUpAction: (index: number) => void,
    onServiceMoveDownAction: (index: number) => void,
};

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        padding: theme.spacing(0.3),
        display: 'flex',
        alignItems: 'center',
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
        onServiceDealerUpdatedAction 
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

    return (
        <div className={classes.container}>
            <DateInput className={classes.margin} value={service.date} onChange={onDateUpdateAction}>Date of service</DateInput>
            <TextInput className={classes.margin} value={service.mileage} onChange={onMileageUpdateAction}>Mileage</TextInput>
            <TextInput className={classes.margin} value={service.dealer} onChange={onDealerUpdateAction}>Dealer</TextInput>
            <ServiceListItemActions className={classes.actions} {...props} />
        </div>
    );
};

export default ServiceListItem;