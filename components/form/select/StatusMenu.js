import { ClickAwayListener } from '@material-ui/core'
import { SwapIcon } from 'icons/form'
import React, { useState } from 'react'
import {
    StatusMenuContainer,
    SelectArrow,
    StatusMenuList,
    StatusMenuOptionContainer,
} from '.'
import CheckBox from '../checkbox/CheckBox'
import { useTranslation } from '../../../i18n'

const Arrow = () => (
    <svg
        height="20"
        width="20"
        viewBox="0 0 20 20"
        aria-hidden="true"
        focusable="false"
        className="css-tj5bde-Svg"
    >
        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" />
    </svg>
)
function StatusMenuOption({ data, onChange, values }) {
    const handleChange = (e) => {
        if (e.target.checked) {
            onChange([...values, data])
        } else {
            const filteredValues = values.filter((el) => el.id !== data?.id)
            onChange(filteredValues)
        }
    }
    return (
        <StatusMenuOptionContainer>
            <CheckBox
                checked={!!values.find((el) => el.id === data.id)}
                onChange={handleChange}
                label={data?.name}
            />
        </StatusMenuOptionContainer>
    )
}
function StatusMenu({ value: values, onChange, options }) {
    const { t } = useTranslation()
    const [openMenu, setOpenMenu] = useState(false)
    const resetValues = () => {
        if (options?.statuses?.length) {
            onChange([])
        }
    }
    return (
        <StatusMenuContainer
            openMenu={openMenu}
            onClick={() => setOpenMenu(true)}
            hasValue={!!values?.length}
        >
            <span>
                <SwapIcon />
            </span>
            {t('status')}
            <SelectArrow hasValue={!!values?.length}>
                {values?.length ? <span>{values.length}</span> : <Arrow />}
            </SelectArrow>
            {openMenu ? (
                <ClickAwayListener onClickAway={() => setOpenMenu(false)}>
                    <StatusMenuList noOptions={!options?.statuses?.length}>
                        <div>
                            <button type="button" onClick={resetValues}>
                                {options?.statuses?.length
                                    ? 'Все'
                                    : 'Нет варианта'}
                            </button>
                            {options?.statuses?.map((item) => (
                                <StatusMenuOption
                                    onChange={onChange}
                                    values={values || []}
                                    key={item.id}
                                    data={item}
                                />
                            ))}
                        </div>
                    </StatusMenuList>
                </ClickAwayListener>
            ) : (
                ''
            )}
        </StatusMenuContainer>
    )
}

export default StatusMenu
