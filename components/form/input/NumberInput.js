import React from 'react'
import { StyledInput } from '.'
import { InputContainer, InputLabel } from '..'

function NumberInput({ field, label, placeholder, id, boxStyles, ...rest }) {
    return (
        <InputContainer {...boxStyles}>
            {label ? <InputLabel htmlFor={id}>{label}</InputLabel> : ''}
            <StyledInput {...rest} id={id} type="number" />
        </InputContainer>
    )
}

export default NumberInput
