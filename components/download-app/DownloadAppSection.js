import React from 'react'
import { Container } from '.'
import { Title } from '../common'
import { Wrapper } from '../layout'
import { useTranslation } from '../../i18n'

function DownloadAppSection() {
    const { t } = useTranslation()
    return (
        <Container>
            <Wrapper>
                <div>
                    <Title
                        white
                        section
                        left
                        fontSize={44}
                        className="download_title"
                    >
                        {t('download')}
                    </Title>
                    <div className="download_links">
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
                <div>
                    <img
                        src="/images/iphone.png"
                        alt="Ipone"
                        className="download_app"
                    />
                </div>
            </Wrapper>
        </Container>
    )
}

export default DownloadAppSection
