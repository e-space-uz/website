import React from 'react'
import { StyledInfoDialog } from '.'

export default function InfoDialog(props) {
    const { onClose, text, open, icon } = props

    const handleClose = () => {
        onClose()
    }
    return (
        <StyledInfoDialog
            onClose={handleClose}
            aria-labelledby="simple-dialog-title"
            open={open}
            info
        >
            {icon}
            <h2>{text}</h2>
        </StyledInfoDialog>
    )
}
