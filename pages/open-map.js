import React, { useState } from 'react'
import { request } from 'request/request'
import { centroid } from '@turf/turf'
import dynamic from 'next/dynamic'

const OpenMap = dynamic(() => import('components/form/map/OpenMap'), {
    ssr: false,
})

function openMapPage() {
    const [data, setData] = useState([])
    const viewportCenter = [72.482695097168801, 40.557419946145892]

    const fetchGis = (limit, page) => {
        request
            .get(`/gis?limit=${limit}&page=${page}`)
            .then((res) => {
                const initialFeatures = res.data?.Features.filter(
                    (el) => el?.Geometry?.type,
                ).map((item, index) => {
                    const coordinates =
                        JSON.parse(item.Geometry.coordinates || null) || null
                    const centerCoords = coordinates
                        ? centroid({
                              type: 'Polygon',
                              coordinates,
                          })?.geometry?.coordinates
                        : []

                    return {
                        type: 'Feature',
                        geometry: {
                            type: item.Geometry?.type,
                            coordinates,
                        },
                        properties: {
                            id: index + 1,
                            name: item.Properties.name,
                            status: item.Properties.raw,
                            application_quantity: 1,
                            cadastral_number: item.Properties?.firm || '—',
                            city: '—',
                            region: '—',
                            district: item.Properties.district,
                            area: '—',
                            long:
                                centerCoords?.[0] || coordinates?.[0]?.[0]?.[0],
                            lat:
                                centerCoords?.[1] || coordinates?.[0]?.[0]?.[1],
                            description: '',
                        },
                    }
                })
                setData((old) => [...old, ...initialFeatures])
                fetchGis(limit, page + 1)
            })
            .catch((err) => console.log(err))
    }

    return (
        <OpenMap
            fullScreen
            initialFeatures={data}
            viewportCenter={viewportCenter}
        />
    )
}
export default openMapPage
