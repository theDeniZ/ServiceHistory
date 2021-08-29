import React, { ChangeEvent } from 'react';
import TextField from '@material-ui/core/TextField';

export interface TextInputProps {
    label: string,
    value: any,
    onChange: (value: string) => void,
}
 
const TextInput: React.FC<TextInputProps> = (props) => {
    const { label, value, onChange } = props;

    const fieldChanged = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <>
            <TextField
                label={label}
                value={value}
                onChange={fieldChanged}
            />
        </>
     );
}
 
export default TextInput;