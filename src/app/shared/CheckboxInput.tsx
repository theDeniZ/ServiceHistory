import { Checkbox, FormControlLabel } from "@material-ui/core";
import { PropsWithChildren } from "react";

export interface CheckboxInputProps {
    value: boolean,
    onChange: (newValue: boolean) => void,
    className?: string,
};
 
const CheckboxInput: React.FC<PropsWithChildren<CheckboxInputProps>> = (props) => {
    const { value, onChange, className } = props;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.checked);
    };

    return ( 
        <>
            <FormControlLabel
                control={
                <Checkbox
                    checked={value}
                    onChange={handleChange}
                    name="checkedB"
                    color="primary"
                />
                }
                label={props.children}
                className={className}
            />
        </>
    );
};
 
export default CheckboxInput;
