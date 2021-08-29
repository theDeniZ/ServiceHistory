import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

export interface DateInputProps {
    label: string,
    value: Date,
    onChange: (value: Date) => void,
}
 
const DateInput: React.FC<DateInputProps> = (props) => {
    const { label, value, onChange } = props;

    const handleDateChange = (date: Date | null) => {
        onChange(date || value);
    };

    return (
        <>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="dd.MM.yyyy"
                margin="normal"
                label={label}
                value={value}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>
        </>
     );
}
 
export default DateInput;
