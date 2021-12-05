import React from 'react'
import { StyledIconButton } from '.'

function IconButton({ children, ...rest }) {
    return <StyledIconButton {...rest}>{children}</StyledIconButton>
}

export default IconButton
