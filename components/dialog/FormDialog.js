import { CloseIconMedium } from 'icons/map'
import React from 'react'
import { StyledDialog } from '.'

export default function FormDialog(props) {
    const { onClose, open, title, children } = props

    const handleClose = () => {
        onClose()
    }
    return (
        <StyledDialog
            onClose={handleClose}
            aria-labelledby="simple-dialog-title"
            open={open}
        >
            <header>
                <h3>{title}</h3>
                <button onClick={handleClose} type="button">
                    <CloseIconMedium />
                </button>
            </header>
            <div>{children}</div>
        </StyledDialog>
    )
}
