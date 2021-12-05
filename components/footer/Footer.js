import React from 'react'
import { Mail, LocationOn, Phone } from '@material-ui/icons'
import { Wrapper } from '../layout/index'
import cls from './footer.module.scss'
import { Link, useTranslation } from '../../i18n'
import { InstagramIcon, TwitterIcon, YoutubeIcon } from '../../icons/socials'
import { Logo } from '../../icons'

const socialsData = [
    { icon: <InstagramIcon />, href: 'https://instagram.com' },
    { icon: <TwitterIcon />, href: 'https://telegram.org' },
    { icon: <YoutubeIcon />, href: 'https://youtube.com' },
]

function Footer() {
    const { t } = useTranslation()

    return (
        <footer className={cls.footer_container}>
            <Wrapper>
                <div className="footer_links">
                    <div className="footer_items">
                        <div className={cls.logo}>
                            e-Space
                            <div className="footer_text_2">
                                <p className="footer_txt">{t('contact')}</p>
                            </div>
                        </div>
                        <div className="footer_text">
                            <p className="footer_txt">{t('contact')}</p>
                        </div>
                        <div className={cls.item}>
                            <Mail />
                            info@e-space.uz
                        </div>
                        <div className={cls.item}>
                            <LocationOn />
                            Toshkent shahri
                        </div>
                        <div className={cls.item}>
                            <Phone />
                            {t('number')}
                        </div>
                    </div>
                    <ul className="footer_items_2">
                        <p className="footer_txt">{t('help')}</p>
                        <li className="footer_item">
                            <a href="/" className="footer_link">
                                {t('projectAbout')}
                            </a>
                        </li>
                        <li className="footer_item">
                            <a href="/" className="footer_link">
                                {t('hidden')}
                            </a>
                        </li>
                        <li className="footer_item">
                            <a href="/" className="footer_link">
                                {t('questions')}
                            </a>
                        </li>
                    </ul>
                    <ul className="footer_items_3">
                        <p className="footer_txt">{t('info')}</p>
                        <li className="footer_item">
                            <a href="/" className="footer_link">
                                {t('callback')}
                            </a>
                        </li>
                        <li className="footer_item">
                            <a href="/" className="footer_link">
                                {t('asks')}
                            </a>
                        </li>
                    </ul>
                    <div className="footer_apps">
                        <p className="footer_apps-txt">{t('app')}</p>
                        <a href="/">
                            <img
                                src="/vectors/google-play.svg"
                                alt="Google Play"
                                className="google_app"
                            />
                        </a>
                        <a href="/">
                            <img
                                src="/vectors/app-store.svg"
                                alt="App Store"
                                className="appstore_app"
                            />
                        </a>
                    </div>
                </div>
                <div className={cls.inner}>
                    <div className={cls.item}>{t('espace')}</div>
                    <ul className={cls.socials}>
                        {socialsData.map((link, index) => (
                            <li className={cls.socials_item} key={index}>
                                <Link href={link.href}>
                                    <a target="_blank">{link.icon}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </Wrapper>
        </footer>
    )
}

export default Footer
