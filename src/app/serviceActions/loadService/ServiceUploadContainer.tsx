import {FC} from 'react';
import {useDispatch} from 'react-redux';
import {parseServiceFromFileThunk} from '../../../redux/thunks/FileThunk';
import ServiceUpload from './ServiceUpload';

const ServiceUploadContainer: FC = () => {
  const dispatch = useDispatch();

  const onServiceUploaded = (serviceContent: string) => {
    dispatch(parseServiceFromFileThunk(serviceContent));
  };

  return (
    <>
      <ServiceUpload onServiceUploaded={onServiceUploaded}/>
    </>
  );
}

export default ServiceUploadContainer;
