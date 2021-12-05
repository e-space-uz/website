import { polygon, area } from '@turf/turf'

export default function polygonAreaCalculator(coordinates) {
    const formattedObj = polygon(coordinates)
    const value = area(formattedObj)
    return value
}
