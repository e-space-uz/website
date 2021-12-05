import React from 'react'
import { Box, MenuItem } from '@material-ui/core'
import { Router } from 'next/router'
import { parseCookies } from 'nookies'
import { Link, useTranslation } from '../../i18n'
import { Wrapper } from '../layout'
import { TopNavBarContainer } from '.'

function TopNavBar({ navLinkData }) {
    const { access_token } = parseCookies()
    const { t } = useTranslation()

    return (
        <TopNavBarContainer>
            <Wrapper>
                <nav>
                    <ul>
                        {navLinkData.map((link, index) => (
                            <li key={index}>
                                <Link href={link.href}>
                                    <a>{link.text}</a>
                                </Link>
                            </li>
                        ))}
                        {access_token ? (
                            <li>
                                <Link
                                    href="/my-applications"
                                    onClick={(e) => {
                                        Router.push('/my-applications')
                                    }}
                                    disableRipple
                                >
                                    {t('myOffer')}
                                </Link>
                            </li>
                        ) : (
                            ''
                        )}
                    </ul>
                </nav>
            </Wrapper>
        </TopNavBarContainer>
    )
}

export default TopNavBar
