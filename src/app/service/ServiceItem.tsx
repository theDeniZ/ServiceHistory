import React from 'react';
import Service from "../../model/Service";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextInput from '../shared/TextInput';
import DateInput from '../shared/DateInput';

export interface ServiceItemProps {
    service: Service,
    onServiceUpdated: (service: Service) => void,
};

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  }));

const ServiceItem: React.FC<ServiceItemProps> = (props) => {
    const { service, onServiceUpdated } = props;
    const classes = useStyles();

    const updateService = (key: string, value: any) => {
        const newService = { ...service, [key]: value };
        onServiceUpdated(newService);
    };

    return ( 
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={2}>
                    <Grid>
                        <DateInput label="Date" value={service.date} onChange={(value: Date) => { updateService("date", value)}} />
                    </Grid>
                    <Grid>
                        <TextInput label="Mileage" value={service.mileage} onChange={(value: string) => { updateService("mileage", value)}} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
     );
}
 
export default ServiceItem;