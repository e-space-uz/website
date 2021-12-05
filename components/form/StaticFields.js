import React, { useState, useEffect, useRef } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { request } from 'request/request'
import SelectMenu from './select/SelectMenu'
import useDidUpdate from '../../hooks/useDidUpdate'
import { useTranslation } from '../../i18n'

function StaticFields({ values, setFieldValue }) {
    const { t } = useTranslation()
    const staticFields = [
        {
            id: '60f163c21cf5362a1aac9788',
            name: 'city',
            label: t('village'),
            placeholder: t('village'),
            type: 'radio',
            validation: '',
            description: 'Область',
            order: 1,
            status: true,
            is_required: true,
            property_options: [],
        },
        {
            id: '60f163b31cf5362a1aac9787',
            name: 'region',
            label: t('region_2'),
            placeholder: t('region_2'),
            type: 'radio',
            validation: '',
            description: 'Регион',
            order: 2,
            status: true,
            is_required: true,
            property_options: [],
        },
        {
            id: '60f163991cf5362a1aac9786',
            name: 'district',
            label: t('street'),
            placeholder: t('street'),
            type: 'string',
            validation: '',
            description: 'Махалля',
            order: 3,
            status: true,
            is_required: true,
            property_options: [],
        },
    ]
    const initialValuesLocated = useRef({
        city: false,
        region: false,
        district: false,
    })
    const formData = useSelector(
        (state) => state?.application?.form,
        shallowEqual,
    )
    const [options, setOptions] = useState({
        region: [],
        district: [],
        city: [],
    })
    useEffect(() => {
        if (values.city?.id) {
            request
                .get(`/regions/${values.city?.id}`)
                .then(({ data }) => {
                    setOptions((opts) => ({
                        ...opts,
                        region: data?.regions || [],
                    }))
                })
                .catch((err) => console.log(err))
        }
    }, [values?.city])
    useEffect(() => {
        if (values.city?.id && values?.region?.id) {
            request
                .get(`/districts/${values.city?.id}/${values?.region?.id}`)
                .then(({ data }) => {
                    setOptions((opts) => ({
                        ...opts,
                        district: data?.districts || [],
                    }))
                })
                .catch((err) => console.log(err))
        }
    }, [values?.region])
    useEffect(() => {
        request
            .get(`/city`)
            .then(({ data }) => {
                setOptions((opts) => ({
                    ...opts,
                    city: data?.cities,
                }))
            })
            .catch((err) => console.log(err))
    }, [])
    useDidUpdate(() => {
        if (formData?.city && !initialValuesLocated.current.city) {
            setFieldValue('city', formData.city)
            initialValuesLocated.current.city = true
        }
    }, [options.city, formData?.city?.id])
    useDidUpdate(() => {
        if (formData?.region && !initialValuesLocated.current.region) {
            setFieldValue('region', formData.region, formData)
            initialValuesLocated.current.region = true
        }
    }, [options.region, formData?.region?.id])
    useDidUpdate(() => {
        if (formData.district && !initialValuesLocated.current.district) {
            setFieldValue('district', formData.district)
            initialValuesLocated.current.district = true
        }
    }, [options.district, formData?.district?.id])
    useDidUpdate(() => {
        setFieldValue('region', null)
    }, [values?.city?.id])
    useDidUpdate(() => {
        setFieldValue('district', null)
    }, [values?.region?.id])

    return (
        <>
            {staticFields
                ?.sort((a, b) => a.order - b.order)
                .map((field) => (
                    <SelectMenu
                        isStatic
                        boxStyles={{ mb: 2 }}
                        key={field.id}
                        name={field.name}
                        onChange={(value) => setFieldValue(field.name, value)}
                        value={values?.[field.name]}
                        label={field.label}
                        id={field.id}
                        isDisabled={
                            field.name === 'region'
                                ? !values.city
                                : field.name === 'district'
                                ? !values.region
                                : false
                        }
                        required={field?.is_required}
                        options={options[field.name]}
                        placeholder={field.placeholder}
                    />
                ))}
        </>
    )
}

export default StaticFields
