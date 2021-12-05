import React from 'react'
import { Router, useTranslation } from 'i18n'
import { PlayCircle } from 'icons'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import handleLoginRedirect from 'utils/handleLoginRedirect'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { Container, ExtraPart, PlayButton, VideoBox } from '.'
import { Title } from '../common'
import { Wrapper } from '../layout'
import Step from './Step'
import Button from '../form/button/Button'

function InformationSection() {
    const { t } = useTranslation()
    const tempData = [
        {
            // number: '1',
            image: '/images/info_icon_1.svg',
            title: t('oneId_2'),
            desc: t('oneId'),
        },
        {
            // number: '2',
            image: '/images/info_icon_2.svg',
            title: t('offer'),
            desc: t('offer2'),
        },
        {
            // number: '3',
            image: '/images/info_icon_3.svg',
            title: t('checkStatus'),
            desc: t('checkStatus_2'),
        },

        {
            // number: '4',
            image: '/images/info_icon_4.svg',
            title: t('auction'),
            desc: t('auction_2'),
        },
    ]
    return (
        <>
            <Container
                style={{
                    flexDirection: 'column',
                    background: '#fff',
                    margin: '0 auto',
                }}
            >
                <Wrapper>
                    <Title
                        section
                        style={{ marginTop: '0', textAlign: 'left' }}
                        className="information_title"
                    >
                        {t('offers')}
                    </Title>
                    <div>
                        {tempData.map((item, index) => (
                            <Step key={index} data={item} />
                        ))}
                    </div>
                </Wrapper>
            </Container>

            <ExtraPart id="instruction">
                <div>
                    <p>{t('text')}</p>
                    <div className="extraPart_btns">
                        <Button
                            className="extraPart_btn"
                            primary
                            large
                            onClick={() =>
                                handleLoginRedirect(() =>
                                    Router.push('/create-application'),
                                )
                            }
                        >
                            {t('leaveRequest')}
                        </Button>
                    </div>
                </div>
                <div className="information_banner-card">
                    <div className="information_banner">
                        <div className="information_txts">
                            <Title section className="information_banner-txt">
                                {t('instructions')}
                            </Title>
                            <a href="/">
                                {t('all')}
                                <ArrowForwardIcon
                                    style={{ marginLeft: '10px' }}
                                />
                            </a>
                        </div>
                        <div className="information_cards">
                            <div className="infomation_card">
                                <img alt="video" src="/images/Video_1.png" />
                                <PlayArrowIcon className="play_icon" />
                                <span className="infomation_card-txt">
                                    {t('videoTxt')}
                                </span>
                            </div>
                            <div className="infomation_card">
                                <img alt="video" src="/images/Video_2.png" />
                                <PlayArrowIcon className="play_icon" />
                                <span className="infomation_card-txt">
                                    {t('videoTxt')}
                                </span>
                            </div>
                            <div className="infomation_card">
                                <img alt="video" src="/images/Video_3.png" />
                                <PlayArrowIcon className="play_icon" />
                                <span className="infomation_card-txt">
                                    {t('videoTxt')}
                                </span>
                            </div>
                            <div className="infomation_card">
                                <img alt="video" src="/images/Video_4.png" />
                                <PlayArrowIcon className="play_icon" />
                                <span className="infomation_card-txt">
                                    {t('videoTxt')}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </ExtraPart>
        </>
    )
}

export default InformationSection
