import React from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { closeDialog } from 'store/actions/dialog/dialogActions'
import { dialogTypes } from 'store/actions/dialog/dialogActionTypes'
import TickAnimation from './TickAnimation'
import InfoDialog from './InfoDialog'

export default function DialogBox() {
    const dispatch = useDispatch()
    const dialogData = useSelector((state) => state?.dialog, shallowEqual)
    const handleClose = () => {
        dispatch(closeDialog())
    }
    return (
        <>
            {dialogData.type === dialogTypes.SUCCESS ? (
                <InfoDialog
                    open={dialogData.open}
                    onClose={handleClose}
                    icon={<TickAnimation />}
                    text={dialogData.content}
                />
            ) : (
                ''
            )}
        </>
    )
}
