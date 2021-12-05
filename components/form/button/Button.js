import useDidUpdate from 'hooks/useDidUpdate'
import React, { useState, useRef, useEffect } from 'react'
import { CircularProgress } from '@material-ui/core'
import { StyledButton } from '.'

function Button({
    children,
    adornment,
    type = 'button',
    ml,
    isLoading,
    isDisable = true,

    ...rest
}) {
    const [showLoader, setShowLoader] = useState(false)
    const [width, setWidth] = useState(null)
    const btn = useRef()

    const adornmentStyle = {
        height: '100%',
        display: 'inline-flex',
        color: 'white',
        alignItems: 'center',
        marginRight: children ? 6 : 0,
    }
    useEffect(() => {
        if (btn.current) {
            const buttonWidth = Math.ceil(btn.current.offsetWidth)
            setWidth(buttonWidth)
        }
    }, [btn.current])
    useDidUpdate(() => {
        setShowLoader(isLoading)
    }, [isLoading])
    return (
        <StyledButton
            width={isLoading ? width : ''}
            ref={btn}
            type={type}
            {...rest}
            isLoading={isLoading}
            disabled={!isDisable}
        >
            {showLoader ? (
                <CircularProgress color="inherit" size={24} />
            ) : (
                <span>
                    {adornment ? (
                        <span style={adornmentStyle}>{adornment}</span>
                    ) : (
                        ''
                    )}
                    {children}
                </span>
            )}
        </StyledButton>
    )
}

export default Button
