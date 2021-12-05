import React from 'react'
import { useTranslation } from 'i18n'
import { Container, Wrapper } from '.'
import Step from './Step'

function HeaderInfo() {
    const { t } = useTranslation()
    const tempData = [
        {
            image: '/images/information_card-2.svg',
            title: t('headerTitle'),
            desc: t('headerInfo'),
            desc_2: t('headerInfo_2'),
        },
    ]
    return (
        <>
            <Container id="news">
                <Wrapper>
                    <div>
                        {tempData.map((item, index) => (
                            <Step key={index} data={item} />
                        ))}
                    </div>
                </Wrapper>
            </Container>
        </>
    )
}

export default HeaderInfo
