import React, { useEffect, useState } from 'react'
import OpenMap from 'components/form/map/OpenMap'
import axios from 'axios'

const openMapPageDisplay = () => {
    const [data, setData] = useState()
    const viewportCenter = [65.4119751440001, 38.924410949]
    useEffect(() => {
        axios
            .get('http://195.158.30.2:8559/data2')
            .then((res) => {
                const initialFeatures = res.data
                    .filter((el) => el?.geog?.type)
                    .map((item) => ({
                        type: 'Feature',
                        geometry: {
                            type: item.geog.type,
                            coordinates: item.geog.coordinates,
                        },
                        properties: {},
                    }))
                setData(initialFeatures)
            })
            .catch((err) => console.log(err))
    }, [])
    return (
        <OpenMap
            fullScreen
            initialFeatures={data}
            viewportCenter={viewportCenter}
            onChange={() => {}}
        />
    )
}

export default openMapPageDisplay
