import {useDispatch} from 'react-redux';
import {createServiceThunk} from '../../../redux/thunks/ServiceThunk';
import CreateService from './CreateService';


const CreateServiceContianer: React.FC = () => {
  const dispatch = useDispatch();

  const onServiceCreateAction = () => {
    dispatch(createServiceThunk());
  };

  return (
    <CreateService onServiceCreateAction={onServiceCreateAction} />
  );
}

export default CreateServiceContianer;
