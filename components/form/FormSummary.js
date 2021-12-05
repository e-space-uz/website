import React, { useMemo, useState } from 'react'
import { SectionTitle } from 'components/common'
import { DataRow } from 'components/application'
import { Box } from '@material-ui/core'
import ImageViewer from 'react-simple-image-viewer'
import { FormContainer, FormActions, FormSummaryContainer } from './index'
import Button from './button/Button'
import FormSection from './FormSection'
import TextInput from './input/TextInput'
import PhoneInput from './input/PhoneInput'
import Map from './map/Map'
import { useTranslation } from '../../i18n'

function FormSummary({
    data,
    onSubmit,
    values,
    onCancel,
    setFieldValue,
    isLoading,
    gallery,
    user,
}) {
    const [previewVisible, setPreviewVisible] = useState(false)
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)
    const imageLinks = useMemo(
        () =>
            gallery?.map(
                (image) => `https://cdn.api.e-space.javelin.uz/${image}`,
            ),
        [gallery],
    )
    const imageClickHandler = (index) => {
        setSelectedImageIndex(index)
        setPreviewVisible(true)
    }
    const { t } = useTranslation()

    return (
        <FormContainer noShadow onSubmit={onSubmit}>
            <FormSummaryContainer display="flex">
                <Box border="1px solid #e5e5e5" flexGrow="1" borderRadius={12}>
                    {data?.map((section, index) => (
                        <Box mb={6} key={index}>
                            <SectionTitle>{section?.name}</SectionTitle>
                            {section?.name === t('village') ? (
                                <>
                                    <DataRow>
                                        <p>{t('village')}</p>
                                        <span>{values?.city?.name}</span>
                                    </DataRow>
                                    <DataRow>
                                        <p>{t('region_2')}</p>
                                        <span>{values?.region?.name}</span>
                                    </DataRow>
                                    <DataRow>
                                        <p>{t('street')}</p>
                                        <span>{values?.district?.name}</span>
                                    </DataRow>
                                </>
                            ) : (
                                ''
                            )}
                            {section?.properties?.map((field) =>
                                field?.type === 'map' ? (
                                    ''
                                ) : (
                                    <DataRow
                                        key={field.id}
                                        area={
                                            field.id ===
                                            '610a0f779febbc60ec2b85af'
                                        }
                                    >
                                        <p>{field?.name}</p>
                                        <span>
                                            {values?.[field?.id]?.lastModified
                                                ? values?.[field?.id]?.name
                                                : typeof values?.[field?.id] ===
                                                  'string'
                                                ? values?.[field?.id] || '—'
                                                : values?.[field?.id]?.name ||
                                                  '-'}
                                            {values?.[field?.id] &&
                                            field.id ===
                                                '610a0f779febbc60ec2b85af'
                                                ? values?.[field?.id] > 1
                                                    ? ' сотки'
                                                    : ' сотка'
                                                : ''}
                                        </span>
                                    </DataRow>
                                ),
                            )}
                        </Box>
                    ))}
                    {gallery.length ? (
                        <Box>
                            <SectionTitle>{t('applicationPhoto')}</SectionTitle>
                            <div className="Gallery">
                                {imageLinks?.map((link, index) => (
                                    <d
                                        onClick={() => imageClickHandler(index)}
                                        className="block"
                                        key={index}
                                    >
                                        <img src={link} alt="asd" />
                                    </d>
                                ))}
                                {previewVisible && (
                                    <ImageViewer
                                        src={imageLinks}
                                        alt="asd"
                                        currentIndex={selectedImageIndex}
                                        disableScroll
                                        onClose={() => setPreviewVisible(false)}
                                    />
                                )}
                            </div>
                        </Box>
                    ) : (
                        <SectionTitle style={{ marginTop: '28px' }}>
                            {t('noFoto')}
                        </SectionTitle>
                    )}
                </Box>
                <Box>
                    <FormSection title={t('applicant')} columns={1}>
                        <Box display="flex" flexDirection="column">
                            <Box display="flex" flexDirection="column">
                                <TextInput
                                    name="user"
                                    onChange={() => {}}
                                    value={`${user.first_name} ${user.last_name}`}
                                    label={t('fullName')}
                                    disabled
                                    // id={field.id}
                                    // required={field?.required > 0}
                                />
                                <PhoneInput
                                    name="phone_number"
                                    onChange={(value) => {
                                        setFieldValue('phone_number', value)
                                    }}
                                    defaultValue={user.phone_number}
                                    label={t('contactNum')}
                                    // id={field.id}
                                    // required={field?.required > 0}
                                />
                            </Box>
                            {data?.map((section) =>
                                section.properties
                                    ?.filter((el) => el.type === 'map')
                                    ?.map((field) => {
                                        const firstValidPolygon = values?.[
                                            field.id
                                        ]?.length
                                            ? values?.[field?.id]?.find(
                                                  (el) =>
                                                      el?.geometry?.type ===
                                                      'Polygon',
                                              )
                                            : null
                                        return firstValidPolygon ? (
                                            <Box
                                                mt={2}
                                                style={{
                                                    borderRadius: 12,
                                                    overflow: 'hidden',
                                                }}
                                                key={field.id}
                                            >
                                                <Map
                                                    notEditable
                                                    mapHeight={160}
                                                    key={values?.[field?.id]}
                                                    initialFeatures={
                                                        values?.[field?.id]
                                                    }
                                                    noControls
                                                    viewportCenter={
                                                        firstValidPolygon
                                                            .geometry
                                                            ?.coordinates?.[0]?.[0]
                                                    }
                                                />
                                            </Box>
                                        ) : (
                                            ''
                                        )
                                    }),
                            )}
                        </Box>
                    </FormSection>
                </Box>
            </FormSummaryContainer>
            <FormActions>
                <Button secondary type="button" onClick={onCancel}>
                    {t('back')}
                </Button>
                <Button primary type="submit" isLoading={isLoading}>
                    {t('send')}
                </Button>
            </FormActions>
        </FormContainer>
    )
}

export default FormSummary
