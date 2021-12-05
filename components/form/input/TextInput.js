import React from 'react'
import { StyledInput } from '.'
import { InputAdornment, InputContainer, InputLabel } from '..'

function TextInput({
    label,
    placeholder,
    type = 'text',
    id,
    boxStyles,
    adornment,
    ...rest
}) {
    return (
        <InputContainer {...boxStyles}>
            {label ? <InputLabel htmlFor={id}>{label}</InputLabel> : ''}
            {adornment ? <InputAdornment>{adornment}</InputAdornment> : ''}
            <StyledInput
                {...rest}
                id={id}
                placeholder={placeholder}
                type={type}
                adornment={Boolean(adornment)}
            />
        </InputContainer>
    )
}

export default TextInput
