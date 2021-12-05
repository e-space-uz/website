import { Container, Wrapper } from 'components/layout'
import React from 'react'
import { useTranslation } from 'i18n'
import { Link } from '@material-ui/core'
import cls from './normative.module.scss'

export default function Normative({ data }) {
    const { t } = useTranslation()

    return (
        <Container>
            <Wrapper>
                <div className={cls.normative_box}>
                    <h2 className={cls.normative_title}>{t('link_3')}</h2>
                    <div className={cls.normative_cards}>
                        {data?.normatives.map((item, index) => (
                            <div className={cls.normative_card} key={index}>
                                <h3 className={cls.normative_card_title}>
                                    {item.title}
                                </h3>
                                <p className={cls.normative_card_txt}>
                                    {item.description}
                                </p>
                                <Link
                                    className={cls.normative_card_link}
                                    href={item.url_link}
                                    target="_blank"
                                >
                                    {item.url_link}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </Wrapper>
        </Container>
    )
}
