/* eslint-disable jsx-a11y/label-has-associated-control */
import { CircularProgress } from '@material-ui/core'
import React, { useState } from 'react'
import { request } from 'request/request'
import { StyledInnerFile, StyledInputFileContainer } from '.'
import { InputContainer, InputLabel } from '..'
import { useTranslation } from '../../../i18n'

function FileInput({
    label,
    placeholder,
    id,
    value,
    onChange,
    name,
    boxStyles,
    ...rest
}) {
    const [loading, setLoading] = useState(false)
    const [fileName, setFileName] = useState(null)

    const inputChangeHandler = (e) => {
        setLoading(true)
        const file = e.target.files[0]

        if (!file) {
            setLoading(false)
            return
        }

        const data = new FormData()
        data.append('file', file)
        data.append('comment', '')

        request
            .post('/file-upload', data, {
                headers: {
                    'Content-Type': 'mulpipart/form-data',
                },
            })
            .then((res) => {
                onChange(res.data.file_path)
                setFileName(file.name)
            })
            .finally(() => setLoading(false))
    }
    const { t } = useTranslation()
    return (
        <InputContainer {...boxStyles}>
            {label ? <InputLabel htmlFor={id}>{label}</InputLabel> : ''}
            <StyledInputFileContainer>
                <input
                    {...rest}
                    onChange={(e) => inputChangeHandler(e)}
                    type="file"
                    id={id}
                />
                <StyledInnerFile hasValue={value}>
                    {fileName || t('fileNotChoose')}
                </StyledInnerFile>
                <label htmlFor={id}>
                    {!loading ? (
                        t('fileChoose')
                    ) : (
                        <CircularProgress size={12} />
                    )}
                </label>
            </StyledInputFileContainer>
        </InputContainer>
    )
}

export default FileInput
