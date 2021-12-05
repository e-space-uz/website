/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState, useRef } from 'react'
import {
    ClickAwayListener,
    Grow,
    Paper,
    Popper,
    MenuItem,
    MenuList,
    makeStyles,
} from '@material-ui/core'
import { Router, useTranslation } from 'i18n'
import { destroyCookie } from 'nookies'

const useStyles = makeStyles(() => ({
    btn: {
        background: '#F6FCFF',
        border: '1px solid #4094F7',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        fontWeight: 500,
        borderRadius: '50%',
        fontSize: '16px',
        lineHeight: '19px',
        position: 'relative',
        '& > svg': {
            marginLeft: 6,
        },
    },
    paper: {
        borderRadius: '8px',
        background: '#fff',
        overflow: 'hidden',
        boxShadow: '0px 2px 15px rgba(0, 0, 0, 0.15)',
        '& .MuiMenuItem-root': {
            color: '#000',
            padding: '12px',
            minWidth: '70px',
            display: 'flex',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '20px',
            justifyContent: 'space-between',
        },
        '& .MuiMenuItem-root > svg': {
            marginLeft: 4,
        },
        '& .MuiList-root': {
            cursor: 'default',
            padding: '0',
        },
        '& .MuiListItem-root:hover': {
            background: 'rgba(0,0,0,0.04)',
        },
    },
    popper: {
        zIndex: '999',
        top: '10px !important',
        left: 'auto !important',
    },
}))

const ProfileMenu = ({ initials }) => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const anchorRef = useRef(null)

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen)
    }

    const logOut = () => {
        destroyCookie(null, 'access_token')
        destroyCookie(null, 'refresh_token')
        Router.push('/')
    }

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return
        }

        setOpen(false)
    }

    const handleListKeyDown = (event) => {
        if (event.key === 'Tab') {
            event.preventDefault()
            setOpen(false)
        }
    }

    const prevOpen = useRef(open)
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus()
        }

        prevOpen.current = open
    }, [open])

    const { t } = useTranslation()
    return (
        <>
            <button
                type="button"
                className={`${classes.btn}`}
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
            >
                {initials}
                <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    className={classes.popper}
                    role={undefined}
                    transition
                    disablePortal
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                    placement === 'bottom'
                                        ? 'center top'
                                        : 'center bottom',
                            }}
                        >
                            <Paper className={classes.paper}>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList
                                        autoFocusItem={open}
                                        id="menu-list-grow"
                                        onKeyDown={handleListKeyDown}
                                    >
                                        <MenuItem
                                            onClick={(e) => {
                                                handleClose(e)
                                                Router.push('/profile')
                                            }}
                                            disableRipple
                                        >
                                            {t('myDate')}
                                        </MenuItem>
                                        {/* <MenuItem
                                            onClick={(e) => {
                                                handleClose(e)
                                                Router.push('/my-applications')
                                            }}
                                            disableRipple
                                        >
                                            {t('myOffer')}
                                        </MenuItem> */}
                                        <MenuItem
                                            onClick={() => {
                                                logOut()
                                            }}
                                            disableRipple
                                        >
                                            {t('myExit')}
                                        </MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </button>
        </>
    )
}

export default ProfileMenu
