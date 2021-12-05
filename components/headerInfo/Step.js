import Button from 'components/form/button/Button'
import React from 'react'
import handleLoginRedirect from 'utils/handleLoginRedirect'
import { Router, useTranslation } from 'i18n'

function Step({ data }) {
    const { t } = useTranslation()

    return (
        <div className="stepData">
            <img
                alt="information_card-img"
                className="information_card-img"
                src={data.image}
            />
            <div>
                <h4>{data.title}</h4>
                <p>{data.desc} </p>
                <p>{data.desc_2} </p>
                <Button
                    primary
                    onClick={() =>
                        handleLoginRedirect(() =>
                            Router.push('/create-application'),
                        )
                    }
                    className="leaveOffer_btn"
                >
                    {t('leaveRequest')}
                </Button>
            </div>
        </div>
    )
}

export default Step
