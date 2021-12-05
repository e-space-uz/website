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
    Box,
} from '@material-ui/core'
import { ArrowDropDown } from '@material-ui/icons'
import { i18n } from '../../i18n'

const useStyles = makeStyles(() => ({
    btn: {
        background: 'transparent',
        border: '0',
        display: 'flex',
        alignItems: 'center',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '19px',
    },
    paper: {
        borderRadius: '8px',
        background: '#fff',
        overflow: 'hidden',
        boxShadow: '0px 2px 15px rgba(0, 0, 0, 0.15)',
        '& .MuiMenuItem-root': {
            color: '#000',
            padding: '8px !important',
            minWidth: '100px',
            display: 'flex',
            fontWeight: '500',
            justifyContent: 'start',
        },
        '& .MuiMenuItem-root > svg': {
            marginRight: 8,
        },
        '& .MuiList-root': {
            padding: '0',
        },
        '& .MuiListItem-root:hover': {
            background: 'rgba(0,0,0,0.04)',
        },
    },
    popper: {
        zIndex: '999',
        top: '10px !important',
        left: '4px !important',
        '@media (max-width:876px)': {
            top: '10px !important',
            left: '0 !important',
        },
        '@media (max-width:767px)': {
            top: '3px !important',
            left: '4px !important',
        },
    },
    icon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    dropdownIcon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 6,
    },
}))
const languageData = [
    { slug: 'uz', text: "O'z" },
    { slug: 'uzc', text: 'Уз' },
    { slug: 'kaa', text: 'Каа' },
    { slug: 'ru', text: 'Ру' },
]
const LanguageChanger = () => {
    const [activeLang, setActiveLang] = useState('')
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const anchorRef = useRef(null)

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen)
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
    useEffect(() => {
        const currentLang = languageData.find((el) => el.slug === i18n.language)
        setActiveLang(currentLang)
    }, [i18n.language])

    return (
        <Box mr={2}>
            <button
                type="button"
                className={`${classes.btn}`}
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
            >
                {/* <span className={classes.icon}>{activeLang?.icon}</span> */}
                {activeLang?.text}
                <span className={classes.icon}>
                    <ArrowDropDown />
                </span>
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
                                        {languageData?.map(
                                            (lang) =>
                                                lang.slug !== i18n.language && (
                                                    <MenuItem
                                                        onClick={(e) => {
                                                            handleClose(e)
                                                            setActiveLang(
                                                                activeLang,
                                                            )
                                                            i18n.changeLanguage(
                                                                lang.slug,
                                                            )
                                                        }}
                                                        disableRipple
                                                    >
                                                        {lang.icon}
                                                        {lang?.text}
                                                    </MenuItem>
                                                ),
                                        )}
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </button>
        </Box>
    )
}

export default LanguageChanger
