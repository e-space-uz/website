import React, { useState } from 'react'
import FormDialog from 'components/dialog/FormDialog'
import PhoneInput from 'components/form/input/PhoneInput'
import { parseCookies } from 'nookies'
import handleLoginRedirect from 'utils/handleLoginRedirect'
import Button from '../form/button/Button'
import { Link, Router, useTranslation } from '../../i18n'
import { HamburgerIcon, Logo } from '../../icons'

import TopNavBar from './TopNavBar'
import { Box, Wrapper } from '../layout'
import { HeaderActions, HeaderContainer } from '.'
import MobileDrawer from './MobileDrawer'
import ProfileMenu from './ProfileMenu'
import LanguageChanger from './LanguageChanger'
import { Typography } from '@material-ui/core'

function Header() {
    const { t } = useTranslation()
    const { initials, access_token } = parseCookies()
    const navLinkData = [
        { text: 'Bosh sahifa', href: '/' },
        { text: t('link_2'), href: '/open-map' },
    ]
    const [openLoginDialog, setOpenLoginDialog] = useState(false)
    const [openDrawer, setOpenDrawer] = useState(false)

    return (
        <>
            <HeaderContainer>
                <Wrapper>
                    <nav>
                        <Button
                            icon
                            noBorder
                            onClick={() => setOpenDrawer(true)}
                        >
                            <HamburgerIcon />
                        </Button>
                        <Box height={32} mr={2} className="header_logos">
                            <Link href="/">
                                <a
                                    style={{
                                        display: 'inline-block',
                                    }}
                                    className="header_logo"
                                >
                                    <Typography variant="h3" color="primary" >
                                        e-Space
                                    </Typography>
                                </a>
                            </Link>
                        </Box>
                        <HeaderActions>
                            {access_token ? (
                                <ProfileMenu initials={initials} />
                            ) : (
                                <Button
                                    onClick={() =>
                                        handleLoginRedirect(() =>
                                            Router.push('/profile'),
                                        )
                                    }
                                >
                                    {t('come')}
                                </Button>
                            )}
                            <Button
                                primary
                                onClick={() =>
                                    handleLoginRedirect(() =>
                                        Router.push('/create-application'),
                                    )
                                }
                            >
                                {t('leaveRequest')}
                            </Button>
                        </HeaderActions>
                    </nav>
                </Wrapper>
            </HeaderContainer>
            <TopNavBar navLinkData={navLinkData} />
            <FormDialog
                title="Авторизоваться"
                open={openLoginDialog}
                onClose={() => setOpenLoginDialog(false)}
            >
                <div>
                    Внимание !!! Доступ к системе через SMS-авторизацию только
                    для пользователей, которые зарегистрированы в{' '}
                    <a>Единой системе идентификации (id.gov.uz)</a> и ранее
                    авторизовались в кабинете!
                </div>
                <PhoneInput placeholder="+998" boxStyles={{ mt: 2, mb: 1 }} />
                <Button fullWidth primary>
                    {t('send')}
                </Button>
            </FormDialog>
            <MobileDrawer
                navLinkData={navLinkData}
                open={openDrawer}
                handleClose={() => setOpenDrawer(false)}
            />
        </>
    )
}
export default Header
