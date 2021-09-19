import {IconButton} from '@material-ui/core';
import ServiceItem from '../../../model/ServiceItem';
import {getServiceTypePickerOptions, ServiceType} from '../../../model/ServiceType';
import PickerInput from '../../shared/PickerInput';
import DeleteIcon from '@material-ui/icons/Delete';
import {makeStyles} from '@material-ui/core/styles';

export interface ServiceItemListItemProps {
    serviceItem: ServiceItem;
    onServiceTypeChanged: (ServiceType: ServiceType) => void;
    onServiceItemDeleted: () => void;
}

const useStyles = makeStyles((theme) => ({
  item: {
    width: theme.spacing(32),
  },
  picker: {
    width: theme.spacing(24),
  },
  margin: {
    margin: theme.spacing(1),
  },
  moveActions: {
    width: theme.spacing(16),
    display: 'inline-block',
  },
}));

const ServiceItemListItem: React.FC<ServiceItemListItemProps> = (props) => {
  const {serviceItem, onServiceTypeChanged, onServiceItemDeleted} = props;

  const classes = useStyles();

  const pickerOptions = getServiceTypePickerOptions();

  const onPickerChanged = (newValue: string) => {
    const newType: ServiceType = newValue as ServiceType;
    onServiceTypeChanged(newType);
  };

  const onDeleteAction = () => {
    onServiceItemDeleted();
  };

  return (
    <div className={classes.item}>
      <PickerInput
        value={serviceItem.serviceType}
        options={pickerOptions}
        onChange={onPickerChanged}
        className={classes.picker}
      >
                Service type
      </PickerInput>
      <IconButton aria-label="delete" className={classes.margin} onClick={onDeleteAction}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
}

export default ServiceItemListItem;
