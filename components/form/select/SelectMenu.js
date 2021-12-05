import useDidUpdate from 'hooks/useDidUpdate'
import Icon from 'icons/Icon'
import React, { useState } from 'react'

import Select, { components } from 'react-select'
import { ClearValueButton } from '.'
import { InputContainer, InputLabel, InvisibleInput } from '..'
import { selectStyles } from './styles'

const Control = ({ children, ...props }) => {
    const { adornment } = props.selectProps
    const style = {
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 8,
    }
    return (
        <components.Control {...props}>
            {adornment ? <span style={style}>{adornment}</span> : ''}
            {children}
        </components.Control>
    )
}

export default function SelectMenu({
    label,
    placeholder,
    options,
    adornment,
    value,
    required,
    isStatic,
    noBorder,
    boxStyles,
    resetValue,
    clearable,
    ...rest
}) {
    const styles = selectStyles({
        noBorder,
        hasValue: value && clearable,
    })
    const [selectedOption, setSelectedOption] = useState(
        options?.find((el) => el.id === value),
    )
    useDidUpdate(() => {
        if (value !== selectedOption?.value && !isStatic) {
            setSelectedOption(options?.find((el) => el.value === value))
        }
    }, [value])
    return (
        <InputContainer {...boxStyles}>
            {label && <InputLabel>{label}</InputLabel>}
            <Select
                options={options || []}
                adornment={adornment}
                components={{ Control }}
                placeholder={placeholder}
                styles={styles}
                getOptionLabel={(option) => option.name}
                value={isStatic ? value : selectedOption}
                noOptionsMessage={() => 'Нет варианта'}
                {...rest}
            />
            {value && clearable ? (
                <ClearValueButton
                    onClick={() => {
                        if (resetValue) {
                            resetValue()
                        }
                    }}
                >
                    <Icon name="close-filled-icon" />
                </ClearValueButton>
            ) : (
                ''
            )}
            <InvisibleInput
                required={required}
                value={value ? 'has' : ''}
                onChange={() => {}}
            />
        </InputContainer>
    )
}
