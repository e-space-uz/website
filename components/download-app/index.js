import styled from 'styled-components'
import { breakpoints } from 'theme/breakpoint'

export const Container = styled.div`
    background: linear-gradient(
        102.31deg,
        rgba(14, 115, 246, 0.8) -3.22%,
        #9bcffd 85.29%
    );
    width: 100%;
    margin: 64px 0;
    @media ${breakpoints.tl} {
        padding-bottom: 40px;
    }
    & > div {
        display: flex;
        max-height: 500px;
        @media ${breakpoints.tl} {
            max-height: 800px;
            flex-direction: column;
            align-items: center;
            position: relative;
        }
    }
    & > div > div:nth-child(1) {
        padding: 96px 0;
        width: 50%;
        a {
            height: 64px;
            margin-right: 8px;
            @media ${breakpoints.tm} {
                display: flex;
                align-items: end;
            }
            @media ${breakpoints.tl} {
                margin-right: 0;
            }
        }
        @media ${breakpoints.tl} {
            width: 100%;
            padding: 36px;
        }
        @media ${breakpoints.ml} {
            padding: 25px;
        }
        @media ${breakpoints.ms} {
            padding: 15px;
        }
    }
    & > div > div:nth-child(2) {
        width: 50%;
        display: flex;
        justify-content: center;
        img {
            margin-top: -64px;
            @media ${breakpoints.tl} {
                margin: 0;
            }
        }
        @media ${breakpoints.tl} {
            overflow: hidden;
        }
    }
`
