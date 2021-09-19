import {Button} from '@material-ui/core';
import {FC} from 'react';

export interface CreateServiceProps {
    onServiceCreateAction: () => void;
}

const CreateService: FC<CreateServiceProps> = (props) => {
  const {onServiceCreateAction} = props;

  return ( <Button variant="outlined" color="primary" onClick={onServiceCreateAction}>Add Service</Button> );
};

export default CreateService;
