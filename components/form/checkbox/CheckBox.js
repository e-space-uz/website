import React from 'react'
import { StyledCheckbox, StyledFormControlLabel } from '.'

export default function CheckBox({ label, ...rest }) {
    return (
        <StyledFormControlLabel
            control={
                <StyledCheckbox
                    disableRipple
                    color="default"
                    inputProps={{ 'aria-label': 'decorative checkbox' }}
                />
            }
            label={label}
            {...rest}
        />
    )
}
