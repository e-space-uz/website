import React from 'react'
import { FormContainer, FormActions } from './index'
import Button from './button/Button'
import FormSection from './FormSection'
import SelectMenu from './select/SelectMenu'
import SelectMap from './map/SelectMap'
import TextInput from './input/TextInput'
import StaticFields from './StaticFields'
import FileInput from './input/FileInput'
import TextArea from './input/TextArea'
import AreaInput from './input/AreaInput'
import NumberInput from './input/NumberInput'
import Gallery from '../gallery'
import { SectionTitle } from '../common'
import { useTranslation } from '../../i18n'

function Form({
    data,
    onSubmit,
    onFieldChange,
    values,
    setFieldValue,
    last,
    onCancel,
    gallery,
    setGallery,
    constructionTypes,
}) {
    const { t } = useTranslation()
    // console.log('data', data)
    return (
        <>
            {data ? (
                <FormContainer noShadow onSubmit={onSubmit}>
                    {data?.group_properties?.map((section, index) => (
                        <FormSection
                            center={section.centered}
                            title={section.name}
                            key={index}
                        >
                            {section?.name === 'Адрес' ? (
                                <StaticFields
                                    onFieldChange={onFieldChange}
                                    values={values}
                                    setFieldValue={setFieldValue}
                                />
                            ) : (
                                ''
                            )}
                            {section.properties
                                ?.sort((a, b) => a.order - b.order)
                                .map((field) =>
                                    field?.id === '60ee8a5ec30b719d5f4e4686' ? (
                                        <AreaInput
                                            key={field.id}
                                            setFieldValue={setFieldValue}
                                            name={field.id}
                                            onChange={onFieldChange}
                                            value={values?.[field.id]}
                                            label={field.label}
                                            id={field.id}
                                            required={field?.is_required}
                                            placeholder={field.placeholder}
                                            boxStyles={{ mb: 3 }}
                                        />
                                    ) : field.type === 'number' ? (
                                        <NumberInput
                                            key={field.id}
                                            name={field.id}
                                            onChange={onFieldChange}
                                            field={field}
                                            value={values?.[field.id]}
                                            label={field.label}
                                            id={field.id}
                                            required={field?.is_required}
                                            placeholder={field.placeholder}
                                            boxStyles={{ mb: 3 }}
                                        />
                                    ) : field.type === 'string' ||
                                      field.type === 'number' ? (
                                        <TextInput
                                            key={field.id}
                                            name={field.id}
                                            onChange={onFieldChange}
                                            value={values?.[field.id]}
                                            label={field.label}
                                            id={field.id}
                                            required={field?.is_required}
                                            placeholder={field.placeholder}
                                            boxStyles={{ mb: 3 }}
                                        />
                                    ) : field.type === 'radio' ? (
                                        <SelectMenu
                                            key={field.id}
                                            name={field.id}
                                            onChange={(opt) =>
                                                setFieldValue(field.id, opt)
                                            }
                                            value={values?.[field.id]?.id}
                                            label={field.label}
                                            id={field.id}
                                            required={field?.is_required}
                                            options={
                                                field.id ===
                                                '60f162a61cf5362a1aac9782'
                                                    ? constructionTypes
                                                    : field.property_options
                                            }
                                            placeholder={field.placeholder}
                                            boxStyles={{ mb: 3 }}
                                        />
                                    ) : field.type === 'map' ? (
                                        <SelectMap
                                            key={field.id}
                                            name={field.id}
                                            id={field.id}
                                            setFieldValue={setFieldValue}
                                            value={values?.[field.id]}
                                            label={field.label}
                                            placeholder={field.placeholder}
                                            required={field?.is_required}
                                            boxStyles={{ mb: 3 }}
                                        />
                                    ) : field.type === 'file' ? (
                                        <FileInput
                                            key={field.id}
                                            name={field.id}
                                            id={field.id}
                                            onChange={(value) =>
                                                setFieldValue(field.id, value)
                                            }
                                            value={values?.[field.id]}
                                            label={field.label}
                                            placeholder={field.placeholder}
                                            required={field?.is_required}
                                            boxStyles={{ mb: 3 }}
                                        />
                                    ) : field.type === 'textarea' ? (
                                        <TextArea
                                            key={field.id}
                                            name={field.id}
                                            id={field.id}
                                            onChange={onFieldChange}
                                            value={values?.[field.id]}
                                            label={field.label}
                                            placeholder={field.placeholder}
                                            required={field?.is_required}
                                            boxStyles={{ mb: 3 }}
                                        />
                                    ) : (
                                        ''
                                    ),
                                )}
                        </FormSection>
                    ))}
                    {Boolean(gallery) && (
                        <>
                            <SectionTitle>{t('applicationPhoto')}</SectionTitle>
                            <Gallery
                                gallery={gallery}
                                setGallery={setGallery}
                            />
                        </>
                    )}
                    <FormActions>
                        <Button secondary type="button" onClick={onCancel}>
                            {last ? t('back') : t('cancel')}
                        </Button>
                        <Button primary type="submit">
                            {t('continue')}
                        </Button>
                    </FormActions>
                </FormContainer>
            ) : (
                ''
            )}
        </>
    )
}

export default Form
