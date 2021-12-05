import styled from 'styled-components'
import { breakpoints } from 'theme/breakpoint'

export const Container = styled.div`
    // background: ${(props) => props.theme.palette.primary[500]};
    width: 100%;
    color: ${(props) => props.theme.palette.white};
    display: flex;
    position: relative;
    @media ${breakpoints.tl} {
        flex-direction: column-reverse;
    }
    @media ${breakpoints.ts} {
        margin-bottom: 20px;
    }
    @media ${breakpoints.mm} {
        margin-bottom: 5px;
    }
    & > div > div {
        // background: ${(props) => props.theme.palette.primary[500]};
        padding: 56px 0 32px;
        position: relative;
        z-index: 2;
        @media ${breakpoints.tl} {
            max-width: 100%;
            clip-path: none;
        }
        // clip-path: polygon(0 0, 100% 0, 70% 100%, 0 100%);
        & > div {
            max-width: 500px;
            @media ${breakpoints.tl} {
                max-width: 100%;
            }

            h4 {
                font-weight: 600;
                font-size: 40px;
                line-height: 48px;
                margin: 0 0 12px;
                @media ${breakpoints.tm} {
                    font-size: 16px;
                    line-height: 26px;
                    margin-top: 12px;
                }
                @media ${breakpoints.mm} {
                    font-size: 16px;
                    line-height: 22px;
                    margin-top: 12px;
                }
            }
            p {
                font-weight: normal;
                font-size: 18px;
                line-height: 30px;
                color: #252c32;
                margin-bottom: 20px;
                @media ${breakpoints.tm} {
                    font-size: 16px;
                    line-height: 20px;
                }
                @media ${breakpoints.mm} {
                    font-size: 15px;
                    line-height: 18px;
                }
            }
        }
    }
    & > img {
        position: absolute;
        top: 0;
        z-index: 1;
        right: 0;
        width: 60%;
        height: 100%;
        object-fit: cover;
        @media ${breakpoints.tl} {
            position: static;
            width: 100%;
        }
    }
    .stepData {
        display: flex;
        column-gap: 24px;
        background: #fff;
        color: #000000;
        padding: 44px 32px;
        flex-direction: row-reverse;
        align-items: center;
        max-width: 1232px;
        width: 100%;
        border-radius: 12px;
        & > div {
            max-width: 450px;
            width: 100%;
            margin-right: auto;
            @media ${breakpoints.ml} {
                text-align: center;
                margin: 0 auto;
            }
        }
        .information_card-img {
            max-width: 100%;
            width: 460px;
        }
        @media ${breakpoints.ml} {
            flex-direction: column;
        }
        .leaveOffer_btn {
            @media ${breakpoints.ml} {
                margin: 0 auto;
            }
        }
    }
`
export const Wrapper = styled.div`
    max-width: 1232px;
    min-height: 100%;
    margin: 0 auto;
    background: transparent;
    width: 100%;
    padding: 0px 16px;
    border-radius: 0;
    & > div {
        justify-content: space-between;
        width: 100%;
    }
    .news_title {
        color: #000;
        text-align: left;
        margin: 0;
        width: 50%;
    }
    .news_btn {
        background: #4094f726;
        color: #4094f7;
        border: #4094f726;
        margin-right: 0;
    }
`
