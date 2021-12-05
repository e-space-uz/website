import proj4 from 'proj4'

export const coordConverter = (point, type = 'PCS') => {
    if (type === 'PCS') {
        proj4.defs(
            'EPSG:3857',
            '+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs',
        )
    } else {
        proj4.defs('EPSG:4326', '+proj=longlat +datum=WGS84 +no_defs')
    }
    const sourceProj = new proj4.Proj(
        type === 'PCS' ? 'EPSG:3857' : 'EPSG:4326',
    )
    const destProj = new proj4.Proj(type === 'PCS' ? 'EPSG:4326' : 'EPSG:3857')
    const coords = proj4.transform(sourceProj, destProj, point)
    return [coords.x, coords.y]
}
export const polygonCoordConverter = (arr) =>
    arr.map((el) => coordConverter(el))
export const pointCoordcoordConverter = (point) => coordConverter(point)
