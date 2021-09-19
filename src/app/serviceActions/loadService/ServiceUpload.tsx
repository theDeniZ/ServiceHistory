import {Button} from '@material-ui/core';
import {ChangeEvent, useRef} from 'react';

export interface FileUploadProps {
    onServiceUploaded: (fileContent: string) => void;
};

const ServiceUpload: React.FC<FileUploadProps> = (props) => {
  const {onServiceUploaded} = props;
  const inputEl = useRef(null);

  const openInput = () => {
    inputEl.current && ((inputEl.current as unknown) as HTMLInputElement).click()
  };

  const parseFile = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (!e.target || !e.target.files || !e.target.files.length) {
      return;
    }

    const reader = new FileReader()
    reader.onload = async (e) => {
      const text = e.target && e.target.result?.toString();
      if (text) {
        onServiceUploaded(text);
      } else {
        alert('Something went wrong. Try again');
      }
    };
    reader.readAsText(e.target.files[0])
  };

  return (
    <>
      <input ref={inputEl} type='file' hidden onChange={parseFile}/>
      <Button variant="outlined" color="primary" onClick={openInput}>Upload Service file</Button>
    </>
  );
}

export default ServiceUpload;
