import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { useRouter } from 'next/router'
import Button from 'components/form/button/Button'
import { FormContainer, FormActions } from 'components/form'
import { Title } from 'components/common'
import { Container } from 'components/layout'
import Map from 'components/form/map/Map'
import {
    setFormFieldData,
    setMapData,
} from 'store/actions/application/applicationActions'
import { PencilIcon, PolygonIcon, TrashIcon } from 'icons/map'
import { Router, useTranslation } from '../i18n'

const MapPage = () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const router = useRouter()
    const mapData = useSelector(
        (state) => state?.application?.form?.[router.query.field] || null,
        shallowEqual,
    )
    const [isDisable, setDisable] = useState([])

    const { handleSubmit, setFieldValue } = useFormik({
        initialValues: {
            map: '',
        },
        onSubmit: (value) => {
            console.log(value)
            dispatch(
                setFormFieldData({
                    [router.query.field]: value.map,
                }),
            )
            dispatch(setMapData(value?.map || ''))
            Router.push('/create-application')
            // alert(JSON.stringify(value, null, 2))
        },
    })
    useEffect(() => {
        if (mapData) {
            setFieldValue('map', mapData)
        }
    }, [mapData])
    return (
        <Container>
            <Title section>{t('map')}</Title>
            <FormContainer onSubmit={handleSubmit} map>
                <Map
                    viewportCenter={
                        mapData?.[0]?.geometry?.coordinates?.[0]?.[0]
                    }
                    initialFeatures={mapData || null}
                    onChange={(data) => setFieldValue('map', data)}
                    setDisable={setDisable}
                />
                <FormActions>
                    <div className="map_icon_info">
                        <div className="info_tooltip">
                            <PolygonIcon fill="#212529" />
                            <p>{t('coordinate')}</p>
                        </div>
                        <div className="info_tooltip">
                            <PencilIcon />
                            <p>{t('chooseCord')}</p>
                        </div>
                        <div className="info_tooltip">
                            <TrashIcon />
                            <p>{t('cord')}</p>
                        </div>
                    </div>
                    <Button
                        secondary
                        type="button"
                        onClick={() => Router.push('/create-application')}
                    >
                        Назад
                    </Button>
                    <Button
                        noBorder
                        type="submit"
                        isDisable={Boolean(isDisable.length)}
                        primary
                    >
                        Готово
                    </Button>
                </FormActions>
            </FormContainer>
        </Container>
    )
}
export default MapPage
