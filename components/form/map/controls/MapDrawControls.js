import React from 'react'
import { DrawPolygonMode, DrawPointMode, EditingMode } from 'react-map-gl-draw'
import palette from 'theme/palette'
import {
    EyeIcon,
    LocationIcon,
    PencilIcon,
    PolygonIcon,
    TrashIcon,
} from 'icons/map'
import styled from 'styled-components'
import { breakpoints } from 'theme/breakpoint'

const MapDrawControlsContainer = styled.div`
    position: absolute;
    top: ${({ centered }) => (centered ? 'calc(50% - 120px)' : '24px')};
    right: 24px;
    border-radius: 4px;
    overflow: hidden;
    @media ${breakpoints.ml} {
        top: calc(50% - 80px);
        right: ${({ openMap }) => (openMap ? '12px' : 'auto')};
        left: ${({ openMap }) => (openMap ? 'auto' : '12px')};
    }
    button {
        width: 32px;
        height: 32px;
        display: block;
        padding: 0;
        outline: none;
        border: 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        background-color: #fff;
        cursor: pointer;
        &:not(:nth-child(1)) {
            border-top: 1px solid #ddd;
        }
    }
`

function MapDrawControls({ setMode, mode, onDelete, centered, openMap }) {
    return (
        <MapDrawControlsContainer openMap={openMap} centered={centered}>
            <div>
                <button
                    type="button"
                    title="Polygon tool"
                    onClick={() =>
                        setMode({
                            type: '',
                            text: 'watch',
                        })
                    }
                >
                    <EyeIcon
                        fill={
                            mode?.text === 'watch' ? palette.primary[600] : ''
                        }
                    />
                </button>
                <button
                    type="button"
                    title="Polygon tool"
                    onClick={() =>
                        setMode({
                            type: new EditingMode(),
                            text: 'edit',
                        })
                    }
                >
                    <PencilIcon
                        fill={mode?.text === 'edit' ? palette.primary[600] : ''}
                    />
                </button>
                <button
                    type="button"
                    title="Polygon tool"
                    onClick={() =>
                        setMode({
                            type: new DrawPolygonMode(),
                            text: 'polygon',
                        })
                    }
                >
                    <PolygonIcon
                        fill={
                            mode?.text === 'polygon' ? palette.primary[600] : ''
                        }
                    />
                </button>

                <button
                    type="button"
                    title="Point tool"
                    onClick={() =>
                        setMode({ type: new DrawPointMode(), text: 'point' })
                    }
                >
                    <LocationIcon
                        fill={
                            mode?.text === 'point' ? palette.primary[600] : ''
                        }
                    />
                </button>
                <button type="button" title="Delete tool" onClick={onDelete}>
                    <TrashIcon />
                </button>
            </div>
        </MapDrawControlsContainer>
    )
}

export default MapDrawControls
