import { Box } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import polygonAreaCalculator from 'utils/polygonAreaCalculator'
import { StyledInput } from '.'
import { InputContainer, InputLabel } from '..'
import Button from '../button/Button'

function AreaInput({
    label,
    placeholder,
    setFieldValue,
    id,
    boxStyles,
    ...rest
}) {
    const [isDisabled, setIsDisabled] = useState(true)
    const mapData = useSelector(
        (state) => state?.application?.map,
        shallowEqual,
    )
    useEffect(() => {
        if (mapData?.length) {
            let sumArea = 0
            const polygonData = mapData?.filter(
                (el) => el.geometry.type === 'Polygon',
            )
            if (polygonData?.length) {
                polygonData?.forEach((map) => {
                    const area =
                        polygonAreaCalculator(map?.geometry?.coordinates) || 0
                    const ar = area / 100
                    sumArea += ar
                })
                const formattedArea = sumArea?.toFixed(2)
                setFieldValue(id, formattedArea)
            }
        } else {
            setFieldValue(id, '')
        }
    }, [mapData])
    return (
        <InputContainer {...boxStyles}>
            {label ? <InputLabel htmlFor={id}>{label}</InputLabel> : ''}
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                width="100%"
            >
                <StyledInput
                    {...rest}
                    id={id}
                    disabled={isDisabled}
                    placeholder={placeholder}
                    type="number"
                />
                {/* {isDisabled && (
                    <Box ml={1}>
                        <Button
                            onClick={() => setIsDisabled(false)}
                            background="#EBF7FF"
                            color="#0E73F6"
                        >
                            Ввести ручную
                        </Button>
                    </Box>
                )} */}
            </Box>
        </InputContainer>
    )
}

export default AreaInput
