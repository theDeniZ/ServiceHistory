import React, { PropsWithChildren } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

export interface DateInputProps {
    value: Date,
    onChange: (value: Date) => void,
    className?: string,
}
 
const DateInput: React.FC<PropsWithChildren<DateInputProps>> = (props) => {
    const { value, onChange, className } = props;

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
                label={props.children}
                value={value}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                className={className}
            />
        </MuiPickersUtilsProvider>
        </>
     );
}
 
export default DateInput;
