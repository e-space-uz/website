import React from 'react'
import { StyledTextArea } from '.'
import { InputContainer, InputLabel } from '..'

function TextArea({ label, id, placeholder, boxStyles, ...rest }) {
    return (
        <InputContainer {...boxStyles}>
            {label ? <InputLabel htmlFor={id}>{label}</InputLabel> : ''}
            <StyledTextArea
                {...rest}
                maxRows={10}
                minRows={4}
                id={id}
                placeholder={placeholder}
                required
            />
        </InputContainer>
    )
}

export default TextArea
