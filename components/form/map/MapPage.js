/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useRef, useEffect, useCallback } from 'react'
import { EditingMode, Editor } from 'react-map-gl-draw'
import ReactMapGL, {
    WebMercatorViewport,
    LinearInterpolator,
} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { bbox } from '@turf/turf'
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import useDidUpdate from 'hooks/useDidUpdate'
import MapZoomControls from './controls/MapZoomControls'
import MapFullscreenControl from './controls/MapFullscreenControl'
import MapDrawControls from './controls/MapDrawControls'
import MapTypeControls from './controls/MapTypeControls'
import MapPageBar from './controls/MapPageBar'
import MapTopBar from './controls/MapTopBar'
import MapGuideBox from './controls/MapGuideBox'
import ToolTip from './controls/ToolTip'
import { getEditHandleStyle, getFeatureStyle } from './style'
import SourceLayer from './SourceLayer'

const MapPage = ({
    onChange = () => {},
    initialFeatures,
    viewportCenter = [69.2401, 41.2995],
    mapHeight,
    fullScreen,
}) => {
    const [viewport, setViewport] = useState({
        width: '100%',
        height: mapHeight ? `${mapHeight}px` : '500px',
        longitude: viewportCenter?.[0],
        latitude: viewportCenter?.[1],
        zoom: 9,
        bearing: 0,
        pitch: 0,
        scrollZoom: false,
    })
    const [selectedFeatureIndex, setSelectedFeatureIndex] = useState()
    const [features, setFeatures] = useState(initialFeatures)
    const [editFeatures, setEditFeatures] = useState([])
    const [toolTipContent, setToolTipContent] = useState({
        show: false,
    })

    const [mode, setMode] = useState({ text: 'watch', type: '' })

    const [mapStyle, setMapStyle] = useState(
        'mapbox://styles/mapbox/outdoors-v11',
    )
    // Satillate mode  - 'mapbox://styles/mapbox/satellite-v9'
    const mapRef = useRef()
    const editorRef = useRef()

    useEffect(() => {}, [])
    const onUpdate = (payload) => {
        onChange(payload)
        if (payload.editType === 'addFeature') {
            setMode({
                type: new EditingMode(),
                text: 'edit',
            })
        }
        setEditFeatures(payload.data)
    }

    const onDelete = () => {
        if (selectedFeatureIndex !== null && selectedFeatureIndex >= 0) {
            editorRef.current.deleteFeatures(selectedFeatureIndex)
            setEditFeatures(
                editFeatures?.filter(
                    (el, index) => index !== selectedFeatureIndex,
                ),
            )
        }
    }

    const onSelect = (selected) => {
        setSelectedFeatureIndex(selected.selectedFeatureIndex)
    }
    // const onSelectCity = useCallback(({longitude, latitude}) => {
    //     setViewport({
    //       longitude,
    //       latitude,
    //       zoom: 11,
    //       transitionInterpolator: new FlyToInterpolator({speed: 1.2}),
    //       transitionDuration: 'auto'
    //     });
    //   }, []);

    const closeToolTip = () => {
        setToolTipContent({
            show: false,
        })
    }
    const animateToFeature = (feature) => {
        if (feature && feature.geometry?.coordinates?.length) {
            const [minLng, minLat, maxLng, maxLat] = bbox(feature)
            const vp = new WebMercatorViewport(viewport)
            const { longitude, latitude } = vp.fitBounds(
                [
                    [minLng, minLat],
                    [maxLng, maxLat],
                ],
                {
                    padding: 40,
                },
            )

            setViewport({
                ...viewport,
                zoom: 18,
                longitude,
                latitude,
                transitionInterpolator: new LinearInterpolator({
                    around: [window?.innerWidth / 2, window?.innerHeight / 2],
                }),
                transitionDuration: 3000,
            })
        }
    }
    const handlerClick = useCallback(
        (event) => {
            const {
                features: feature,
                srcEvent: { offsetX, offsetY },
            } = event
            const clickedFeature = feature && feature[0]

            if (clickedFeature?.properties) {
                if (
                    clickedFeature?.properties?.id &&
                    toolTipContent?.properties?.id !==
                        clickedFeature?.properties?.id
                ) {
                    setToolTipContent({
                        properties: clickedFeature?.properties,
                        show: true,
                        offsetX: toolTipContent?.offsetX || offsetX,
                        offsetY: toolTipContent?.offsetY || offsetY,
                    })
                }
            } else if (toolTipContent?.show) {
                closeToolTip()
            }
        },
        [toolTipContent],
    )
    useDidUpdate(() => {
        setFeatures(initialFeatures)
    }, [initialFeatures])
    useDidUpdate(() => {
        if (features?.length) {
            animateToFeature(features[0])
        }
    }, [features])
    useEffect(() => {
        if (window) {
            window.addEventListener('keypress', (e) => {
                if (['D', 'd'].includes(e.key) && mode.text === 'edit') {
                    onDelete()
                }
            })
        }
        return () => window.removeEventListener('keypress', () => {})
    }, [mode.text, editFeatures, selectedFeatureIndex])
    return (
        <div
            className={`${fullScreen ? 'fullscreen' : ''} ${
                mode.text === 'watch' ? 'only_watch_map' : ''
            } map_container`}
        >
            <ReactMapGL
                {...viewport}
                ref={mapRef}
                mapStyle={mapStyle}
                onClick={handlerClick}
                onWheel={(e) => e.preventDefault()}
                mapboxApiAccessToken={process.env.MAPBOX_TOKEN}
                onViewportChange={(nextViewport) => setViewport(nextViewport)}
            >
                <Editor
                    style={{ width: '100%', height: '100%' }}
                    ref={editorRef}
                    clickRadius={12}
                    mode={mode?.type}
                    onSelect={onSelect}
                    onUpdate={onUpdate}
                    features={editFeatures}
                    editHandleShape="circle"
                    featureStyle={getFeatureStyle}
                    editHandleStyle={getEditHandleStyle}
                    onUpdateCursor={(e) => console.log(e)}
                />
                <MapFullscreenControl />
                <div>
                    <a className="fullscreenMap" href="/open-map">
                        mcemdmeo
                    </a>
                </div>
                <SourceLayer features={features} />
                <ToolTip data={toolTipContent} closeToolTip={closeToolTip} />

                <MapDrawControls
                    onDelete={onDelete}
                    mode={mode}
                    openMap
                    setMode={setMode}
                    centered
                />

                <MapPageBar setFeatures={setFeatures} />
                <MapGuideBox />
                <MapZoomControls openMap setViewport={setViewport} />
            </ReactMapGL>
        </div>
    )
}

export default MapPage
