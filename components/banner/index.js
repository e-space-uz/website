import styled from 'styled-components'
import { breakpoints } from 'theme/breakpoint'

export const BannerImage = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    max-height: 500px;
`
export const BannerContent = styled.div`
    position: absolute;
    top: 0;
    left: 12vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    h1 {
        @media ${breakpoints.ml} {
            font-size: 32px;
        }
    }
`
export const Image = styled.img`
    width: 100%;
    height: 500px;
    max-height: 500px;
    object-fit: cover;
`
