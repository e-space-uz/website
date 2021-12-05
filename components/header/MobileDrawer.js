import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { CloseIconMedium } from 'icons/map'
import styled from 'styled-components'
import Button from '../form/button/Button'
import { Link } from '../../i18n'
import { Logo } from '../../icons'
import { Box, Wrapper } from '../layout'
import { HeaderContainer } from '.'

const NavLinkContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    li {
        margin: 10px 0;
        font-weight: 600;
        font-size: 22px;
        line-height: 24px;
        color: #000;
    }
`
const StyledDrawer = styled(Drawer)`
    .MuiDrawer-paper {
        width: 100%;
    }
`
export default function MobileDrawer({ open, handleClose, navLinkData }) {
    return (
        <StyledDrawer anchor="left" open={open} onClose={handleClose}>
            <HeaderContainer>
                <Wrapper>
                    <nav>
                        <Box mr={2}>
                            <Link href="/">
                                <a>
                                    <Logo />
                                </a>
                            </Link>
                        </Box>
                        <Button icon noBorder onClick={handleClose}>
                            <CloseIconMedium />
                        </Button>
                    </nav>
                </Wrapper>
            </HeaderContainer>
            <NavLinkContainer
                role="presentation"
                onClick={handleClose}
                onKeyDown={handleClose}
            >
                <List>
                    {navLinkData.map((link, index) => (
                        <ListItem key={index}>
                            <Link href={link.href}>
                                <a>{link.text}</a>
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </NavLinkContainer>
        </StyledDrawer>
    )
}
