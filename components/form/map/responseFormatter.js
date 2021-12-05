import { centroid } from '@turf/turf'

export default function responseFormatter(arr, entity_single) {
    console.log('arrrr', arr)
    console.log('entity_single', entity_single)
    const formattedArr = []
    // eslint-disable-next-line no-restricted-syntax
    for (const obj of arr) {
        const area =
            obj?.entity_properties?.find(
                (el) => el.property_id === process.env.AREA_ID,
            )?.value || 0
        // const type =
        //     obj.entity_properties.find(
        //         (el) => el.property_id === process.env.FEATURE_TYPE_ID,
        //     )?.value || 'Polygon'
        let coordinates = JSON.parse(
            obj?.entity_properties?.find(
                (el) => el.property_id === process.env.COORDINATES_ID,
            )?.value || null,
        )
        if (entity_single) {
            coordinates = JSON.parse(
                obj?.entity_properties?.find(
                    (el) =>
                        el.property?.id === process.env.COORDINATES_ID ||
                        el.property?.id === process.env.MAP_PROPERTY_ID,
                )?.value || null,
            )
        }
        // const centerCoords = centroid({
        //     type: 'Polygon',
        //     coordinates,
        // }).geometry?.coordinates

        const centerCoords = {
            type: 'Polygon',
            coordinates,
        }.geometry?.coordinates

        const properties = {
            id: obj.id,
            name: obj.address,
            status: obj.status.name,
            application_quantity: 1,
            city: obj.city?.name,
            region: obj.region?.name,
            district: obj.address,
            entity_number: obj.entity_number,
            area,
            long: centerCoords?.[0] || coordinates?.[0]?.[0]?.[0],
            lat: centerCoords?.[1] || coordinates?.[0]?.[0]?.[1],
            description: '',
        }
        const geometry = {
            type: 'Polygon',
            coordinates,
        }
        const formatted = { type: 'Feature', geometry, properties }
        if (coordinates) {
            formattedArr.push(formatted)
        }
    }
    return formattedArr
}
