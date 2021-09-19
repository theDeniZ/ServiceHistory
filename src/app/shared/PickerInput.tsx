import {FormControl, InputLabel, MenuItem, Select} from '@material-ui/core';
import React, {PropsWithChildren, FC} from 'react';

export interface PickerInputProps {
    className?: string;
    required?: boolean;
    value: string;
    options: {value: string, label: string}[];
    onChange: (newValue: string) => void;
}

const PickerInput: FC<PropsWithChildren<PickerInputProps>> = (props) => {
  const {className, options, value, onChange, required} = props;

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
  };

  return (
    <>
      <FormControl required={required}>
        <InputLabel>{props.children}</InputLabel>
        <Select
          value={value}
          onChange={handleChange}
          className={className}
        >
          { options.map((option) => <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>) }
        </Select>
      </FormControl>
    </>
  );
}

export default PickerInput;
