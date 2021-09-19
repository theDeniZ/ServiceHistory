import {Button} from '@material-ui/core';

export interface DownloadServiceProps {
    onDowloadClick: () => void;
};

const DownloadService: React.FC<DownloadServiceProps> = (props) => {
  const {onDowloadClick} = props;
  return (<Button variant="outlined" color="primary" onClick={onDowloadClick}>Save Services to file</Button>);
}

export default DownloadService;
