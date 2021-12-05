import React from 'react'
import { Carousel } from 'react-bootstrap'
import handleLoginRedirect from 'utils/handleLoginRedirect'
import Button from '../form/button/Button'
import { Leading, Title } from '../common'
import { Wrapper } from '../layout'
import { BannerImage, BannerContent, Image } from '.'
import { Router, useTranslation } from '../../i18n'

function Banner() {
    const { t } = useTranslation()
    const list = [
        {
            title: 'ESPACE',
            description: t('description'),
            buttonLabel: t('leaveRequest'),
            image: './images/banner.jpg',
        },
        {
            title: 'ESPACE',
            description: t('description'),
            buttonLabel: t('leaveRequest'),
            image: './images/banner1.jpg',
        },
        {
            title: 'ESPACE',
            description: t('description'),
            buttonLabel: t('leaveRequest'),
            image: './images/banner2.jpg',
        },
        {
            title: 'ESPACE',
            description: t('description'),
            buttonLabel: t('leaveRequest'),
            image: './images/banner3.jpg',
        },
    ]

    return (
        <BannerImage>
            <Carousel prevLabel={null} nextLabel={null}>
                {list.map((item, index) => (
                    <Carousel.Item key={index}>
                        <Wrapper>
                            <BannerContent>
                                <Title white fontSize={64}>
                                    {item.title}
                                </Title>
                                <Leading white mt={24} mb={48}>
                                    {item.description}
                                </Leading>
                                <Button
                                    large
                                    noBorder
                                    onClick={() =>
                                        handleLoginRedirect(() =>
                                            Router.push('/create-application'),
                                        )
                                    }
                                >
                                    {item.buttonLabel}
                                </Button>
                            </BannerContent>
                        </Wrapper>
                        <Image src={item.image} alt={item.title} />
                    </Carousel.Item>
                ))}
            </Carousel>
        </BannerImage>
    )
}

export default Banner
