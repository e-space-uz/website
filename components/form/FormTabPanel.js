/* eslint-disable camelcase */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { useTheme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import { useFormik } from 'formik'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import {
    closeDialog,
    openDialogTypeSuccess,
} from 'store/actions/dialog/dialogActions'
import { request, requestWithAuth } from 'request/request'
import useDidUpdate from '../../hooks/useDidUpdate'
import {
    resetFormData,
    setFormData,
    setMapData,
} from '../../store/actions/application/applicationActions'
import { StyledTab, StyledAppBar, StyledTabs, StyledTabContainer } from '.'
import { Router, useTranslation } from '../../i18n'
import Form from './Form'
import promiseCallback from '../../utils/promiseCallback'
import FormSummary from './FormSummary'
import FormStepper from './FormStepper'

function TabPanel(props) {
    const { children, value, index, ...other } = props
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && <Box>{children}</Box>}
        </div>
    )
}

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    }
}
const generateFields = (data, store) => {
    const initials = {}
    data?.group_properties?.forEach((group) => {
        group.properties?.forEach((prop) => {
            initials[prop.id] = store?.[prop.id] || ''
        })
    })
    return initials
}

export default function FormTabPanel(props) {
    const { firstFormFields, user, initialData, constructionTypes } = props
    const theme = useTheme()
    const [isLoading, setIsLoading] = useState(false)
    const [gallery, setGallery] = useState([])
    const { t } = useTranslation('common')
    const tabNames = [t('tabPanelTxt'), t('target'), t('accsess')]
    const dispatch = useDispatch()
    const formData = useSelector(
        (state) => state?.application?.form,
        shallowEqual,
    )

    const { values, handleChange, setFieldValue, handleSubmit, registerField } =
        useFormik({
            initialValues: {
                ...(formData || {}),
                ...generateFields(firstFormFields, formData),
                ...initialData,
            },
            onSubmit: (allValues) => {
                const entity_properties = []
                const getOnlyCoordsFromFeature = (arr) => {
                    if (Array.isArray(arr)) {
                        const result = arr?.find(
                            (el) => el.geometry?.type === 'Polygon',
                        )
                        console.log(
                            result
                                ? JSON.stringify(
                                      result.geometry.coordinates || null,
                                  )
                                : '',
                        )
                        return result
                            ? JSON.stringify(
                                  result.geometry.coordinates || null,
                              )
                            : ''
                    }
                    return ''
                }
                for (const [key, value] of Object.entries(allValues)) {
                    if (
                        ![
                            'city',
                            'region',
                            'district',
                            'id',
                            'address',
                            'entity_soato',
                            'kadastr_number',
                            'entity_number',
                            'status',
                            'entity_drafts',
                            'entity_properties',
                            'created_at',
                            'updated_at',
                            'map',
                            'version',
                        ].includes(key)
                    ) {
                        entity_properties.push({
                            property_id: key || '611359b073bf6fe15aaef568',
                            value: Array.isArray(value)
                                ? getOnlyCoordsFromFeature(value)
                                : typeof value === 'object'
                                ? value.id
                                : value.toString(),
                        })
                    }
                }
                setIsLoading(true)
                const requestBody = {
                    city: allValues.city,
                    region: allValues.region,
                    district: allValues.district,
                    entity_properties,
                    entity_number: new Date()?.getTime(),
                    entity_soato: `${allValues.district.code}`,
                    entity_gallery: gallery,
                    entity_id: initialData ? initialData.id : '',
                }
                console.log('requestBody => ', requestBody)
                requestWithAuth
                    .post(`/entity-draft`, requestBody)
                    .then(({ status }) => {
                        if (status === 201) {
                            promiseCallback(() => dispatch(resetFormData()))
                                .then(() => {
                                    console.log('success')
                                    dispatch(
                                        openDialogTypeSuccess('Отправлено!'),
                                    )
                                    setTimeout(() => {
                                        dispatch(closeDialog())
                                        Router.push('/')
                                    }, 2000)
                                })
                                .catch((err) => console.log(err))
                        }
                    })
                    .catch((err) => console.log(err))
                    .finally(() => {
                        setIsLoading(false)
                    })
            },
        })
    const [value, setValue] = useState(0)
    const [secondFormFields, setSecondFormFields] = useState(null)
    const [thirdFormFields, setThirdFormFields] = useState(null)
    const handleChangeIndex = (index) => {
        setValue(index)
    }
    const fetchFormFields = (step) => {
        request
            .get(`/group-property-type?step=${step}&type=4`)
            .then(({ data }) => {
                if (step === 2) {
                    setSecondFormFields(data)
                } else if (step === 3) {
                    setThirdFormFields(data)
                }
            })
            .catch((err) => console.log(err))
    }
    const registerFormFields = (formFields) => {
        formFields?.group_properties?.forEach((group) => {
            group.properties.forEach((field) => {
                registerField(field.id, {
                    validate: () => {},
                })
            })
        })
    }
    useEffect(() => {
        if (initialData) {
            dispatch(setMapData(initialData.map || ''))
            fetchFormFields(2)
            setValue(1)
        }
    }, [initialData])
    useDidUpdate(() => {
        dispatch(
            setFormData({
                ...values,
                city: values?.city || formData?.city,
                region: values?.region || formData?.region,
                district: values?.district || formData?.district,
            }),
        )
    }, [values])
    useDidUpdate(() => {
        setValue(1)
        registerFormFields(secondFormFields)
    }, [secondFormFields])
    useDidUpdate(() => {
        setValue(2)
        registerFormFields(thirdFormFields)
    }, [thirdFormFields])
    return (
        <StyledTabContainer>
            <StyledAppBar position="static" color="default">
                <StyledTabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    {tabNames.map((name, index) => (
                        <StyledTab
                            key={index}
                            disableRipple
                            filled={value >= index ? 'true' : ''}
                            label={name}
                            {...a11yProps(index)}
                        />
                    ))}
                </StyledTabs>
                <FormStepper activeStep={value} />
            </StyledAppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                disabled
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <Form
                        data={firstFormFields}
                        onFieldChange={handleChange}
                        setFieldValue={setFieldValue}
                        values={values}
                        onSubmit={(e) => {
                            e.preventDefault()
                            fetchFormFields(2)
                        }}
                        gallery={gallery}
                        setGallery={setGallery}
                    />
                </TabPanel>
                {/* ))} */}
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <Form
                        data={secondFormFields}
                        onFieldChange={handleChange}
                        setFieldValue={setFieldValue}
                        values={values}
                        onCancel={() => {
                            setValue(0)
                        }}
                        last
                        onSubmit={(e) => {
                            e.preventDefault()
                            // fetchFormFields(3)
                            setValue(2)
                        }}
                        constructionTypes={constructionTypes}
                    />
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <FormSummary
                        data={[
                            ...(firstFormFields?.group_properties?.length
                                ? firstFormFields?.group_properties
                                : []),
                            ...(secondFormFields?.group_properties?.length
                                ? secondFormFields?.group_properties
                                : []),
                        ]}
                        onFieldChange={handleChange}
                        setFieldValue={setFieldValue}
                        values={values}
                        onCancel={() => {
                            setValue(1)
                        }}
                        onSubmit={(e) => {
                            e.preventDefault()
                            handleSubmit(e)
                        }}
                        isLoading={isLoading}
                        gallery={gallery}
                        user={user}
                    />
                </TabPanel>
            </SwipeableViews>
        </StyledTabContainer>
    )
}
