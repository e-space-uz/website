import styled from 'styled-components'
import { breakpoints } from 'theme/breakpoint'

export const HeaderContainer = styled.div`
    box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.07);
    background: #fff;
    nav {
        height: 72px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media ${breakpoints.ml} {
            height: 72px;
        }
        & > div svg {
            @media ${breakpoints.ml} {
                width: 150px;
            }
        }
        & > button {
            display: none;
            @media ${breakpoints.ml} {
                display: flex;
                margin-left: -8px;
                margin-right: 4px;
            }
        }
        .header_logos {
            display: flex;
            align-items: center;
            column-gap: 40px;
            position: relative;
            &::after {
                content: '';
                position: absolute;
                height: 24px;
                width: 1px;
                background: rgba(0, 0, 0, 0.15);
                margin: 150px;
                @media ${breakpoints.ml} {
                    display: none !important;
                }
            }
            .header_logo {
                @media ${breakpoints.ml} {
                    display: none !important;
                }
            }
        }
    }
`

export const HeaderActions = styled.div`
    display: flex;
    align-items: center;
    button:nth-child(1) {
        @media ${breakpoints.ml} {
            /* background: ${({ theme }) => theme.palette.primary[600]}; */
            /* color: #fff; */
        }
    }
    button:nth-last-of-type(1) {
        margin-left: 16px;
        @media ${breakpoints.ml} {
            display: none;
        }
    }
`
export const TopNavBarContainer = styled.div`
    box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.07);
    background: #fff;
    @media ${breakpoints.ml} {
        display: none;
    }
    nav {
        padding: 20px 0;
        justify-content: start;
        display: flex;
        align-items: center;
        width: 100%;
        & > ul {
            display: flex;
            list-style-type: none;
            align-items: center;
            justify-content: center;
            margin: 0;
            padding: 0;
            li {
                margin: 0 16px;
                font-size: 15px;
                font-weight: 500;
                text-align: center;
                position: relative;
                cursor: pointer;
                color: rgba(0, 0, 0, 0.8);
                &:nth-of-type(1) {
                    margin-left: 0;
                }
                @media (max-width: 912px) {
                    margin: 0 8px;
                }
                a {
                    padding: 5px;
                }
                &:hover {
                    &::before {
                        width: 100%;
                        opacity: 1;
                    }
                }
                &::before {
                    content: '';
                    width: 0;
                    opacity: 0;
                    height: 2px;
                    transition: width 0.4s, opacity 0.1s;
                    background: rgba(0, 0, 0, 0.7);
                    position: absolute;
                    bottom: -4px;
                    left: 50%;
                    transform: translateX(-50%);
                }
            }
        }
    }
`
