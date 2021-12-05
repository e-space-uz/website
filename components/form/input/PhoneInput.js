import React from 'react'
import { StyledInputPhone } from '.'
import { InputContainer, InputLabel } from '..'

function PhoneInput({ label, placeholder, id, boxStyles, ...rest }) {
    return (
        <InputContainer {...boxStyles}>
            {label ? <InputLabel htmlFor={id}>{label}</InputLabel> : ''}
            <StyledInputPhone
                {...rest}
                id={id}
                mask={`+\\9\\9\\8 99 999 99 99`}
                placeholder={placeholder}
                maskChar={null}
                type="tel"
            />
        </InputContainer>
    )
}

export default PhoneInput
