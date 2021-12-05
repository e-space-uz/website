/* eslint-disable jsx-a11y/label-has-associated-control */
import Button from 'components/form/button/Button'
import { useIsMobile } from 'hooks/useIsMobile'
import { LayerIcon } from 'icons/map'
import React, { useState } from 'react'

import styled from 'styled-components'
import { breakpoints } from 'theme/breakpoint'
import MapTypeControlsDrawer from './MapTypeControlsDrawer'

const TypeControllerContainer = styled.div`
    border-radius: 12px;
    padding: 16px;
    background: #fff;
    position: absolute;
    bottom: 24px;
    right: 24px;
    box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.08);
    @media ${breakpoints.ts} {
        right: 12px;
        padding: 0;
        button {
        }
    }
`
const TypeControllerOption = styled.div`
    border-radius: 12px;
    input {
        width: 0;
        height: 0;
        position: absolute;
        z-index: -1;
    }
    label {
        cursor: pointer;
        display: flex;
        align-items: center;
        height: 32px;
        font-weight: normal;
        font-size: 14px;
        line-height: 24px;
        color: #48535b;
        span {
            display: flex;
            margin-right: 8px;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 1px solid #b0babf;
            position: relative;
            &::before {
                content: '';
                position: absolute;
                top: calc(50% - 4px);
                right: calc(50% - 4px);
                background: #fff;
                height: 8px;
                width: 8px;
                border-radius: 50%;
            }
        }
    }
    input:checked + label span {
        background: ${({ theme }) => theme.palette.primary[500]};
        border: 0;
    }
`
const satellateStyle = 'mapbox://styles/mapbox/satellite-streets-v11'
const streetStyle = 'mapbox://styles/mapbox/outdoors-v11'
function MapTypeControls({ setMapStyle, mapStyle }) {
    const isMobile = useIsMobile()
    const [openDrawer, setOpenDrawer] = useState(false)
    const handleChange = (e) => {
        if (e.target.checked) {
            if (e.target.value === 'satillate') {
                setMapStyle(satellateStyle)
            } else {
                setMapStyle(streetStyle)
            }
        }
    }
    return (
        <TypeControllerContainer>
            {!isMobile && (
                <>
                    <TypeControllerOption>
                        <input
                            onChange={handleChange}
                            type="radio"
                            value="street"
                            checked={mapStyle === streetStyle}
                            name="type"
                            id="option1"
                        />
                        <label htmlFor="option1">
                            <span />
                            Google харита
                        </label>
                    </TypeControllerOption>
                    <TypeControllerOption>
                        <input
                            onChange={handleChange}
                            value="satillate"
                            type="radio"
                            name="type"
                            id="option2"
                            checked={mapStyle === satellateStyle}
                        />
                        <label htmlFor="option2">
                            <span />
                            Google харита (Спутник)
                        </label>
                    </TypeControllerOption>
                </>
            )}
            {isMobile && (
                <>
                    <Button
                        noBorder
                        onClick={() => setOpenDrawer(true)}
                        icon
                        adornment={<LayerIcon />}
                    />
                    <MapTypeControlsDrawer
                        open={openDrawer}
                        handleChange={handleChange}
                        mapStyle={mapStyle}
                        streetStyle={streetStyle}
                        satellateStyle={satellateStyle}
                        handleClose={() => setOpenDrawer(false)}
                    />
                </>
            )}
        </TypeControllerContainer>
    )
}

export default MapTypeControls
