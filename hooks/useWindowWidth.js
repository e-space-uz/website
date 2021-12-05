import { useState, useEffect } from 'react'

export const useWindowWidth = () => {
    const [width, setWidth] = useState(false)
    useEffect(() => {
        if (window) {
            setWidth(window.innerWidth)
            window.addEventListener('resize', () => {
                setWidth(window.innerWidth)
            })
        }
    })
    return [width]
}
