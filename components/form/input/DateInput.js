import React from 'react'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import ruLocale from 'date-fns/locale/ru'
import Icon from 'icons/Icon'
import { InputContainer, InputLabel } from '..'
import { StyledDatePicker } from '.'
import { ClearValueButton } from '../select'

function DateInput(props) {
    const {
        placeholder,
        value = null,
        onChange = () => {},
        label,
        name,
        clearable,
        adornment,
        resetValue,
        ...rest
    } = props
    return (
        <InputContainer hasValue={clearable && value} hasAdornment={adornment}>
            {label && <InputLabel>{label}</InputLabel>}
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
                <StyledDatePicker
                    orientation="portrait"
                    name={name}
                    variant="inline"
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    required
                    autoOk
                    format="dd/MM/yyyy"
                    okLabel={<span>Подтвердить</span>}
                    cancelLabel={null}
                    keyboardbuttonprops={{
                        'aria-label': 'change date',
                    }}
                    {...rest}
                />
            </MuiPickersUtilsProvider>
            <span>{adornment}</span>
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
        </InputContainer>
    )
}

export default DateInput
