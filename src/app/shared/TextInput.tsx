import React, {ChangeEvent, PropsWithChildren} from 'react';
import TextField from '@material-ui/core/TextField';

export interface TextInputProps {
    value: any,
    onChange: (value: string) => void,
    className?: string,
}

const TextInput: React.FC<PropsWithChildren<TextInputProps>> = (props) => {
  const {value, onChange, className} = props;

  const fieldChanged = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <>
      <TextField
        label={props.children}
        value={value}
        onChange={fieldChanged}
        className={className}
      />
    </>
  );
}

export default TextInput;
