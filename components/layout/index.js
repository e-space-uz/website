import { Box as MuiBox } from '@material-ui/core'
import styled from 'styled-components'
import { breakpoints } from 'theme/breakpoint'

export const Container = styled.div`
    max-width: 1096px;
    margin: 0 auto;
    width: 100%;
    ${({ centeredContent }) =>
        centeredContent &&
        `
    display:flex;
    flex-direction: column;
    align-items: center;`}
`
export const Wrapper = styled.div`
    // max-width: 1440px;
    max-width: 1232px;
    min-height: 100%;
    margin: ${({ my }) => (my ? `${my}px` : 0)} auto;
    background: ${({ background }) => background || 'transparent'};
    width: 100%;
    padding: ${({ py, px }) => `${py ?? 0}px ${px ?? 16}px}`};
    border-radius: ${({ br }) => (br ? `${br}px` : 0)};
    .download_title {
        @media ${breakpoints.tl} {
            font-size: 32px;
            line-height: 36px;
        }
        @media ${breakpoints.ml} {
            font-size: 29px;
            line-height: 29px;
        }
        @media ${breakpoints.mm} {
            font-size: 18px;
            line-height: 22px;
            margin: 15px 0;
        }
    }

    .footer_links {
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media ${breakpoints.ls} {
            flex-direction: column;
            align-items: center;
            text-align: center;
            margin: 20px 0;
            row-gap: 20px;
        }
    }
    .footer_items {
        margin: 0;
        .footer_text_2 {
            display: none;
        }
        .footer_text {
            @media ${breakpoints.ml} {
                display: none;
            }
        }
        .footer_text_2 {
            @media ${breakpoints.ml} {
                display: block;
                margin-top: 13px;
            }
        }
        @media ${breakpoints.ml} {
            display: flex;
            align-items: center;
            flex-direction: column-reverse;
        }
        // .footer_item {
        //     padding: 10px;
        // }
        .footer_txt {
            font-size: 18px;
            line-height: 22px;
            color: #000;
            font-weight: 600;
            margin: 0;
        }
        .footer_link {
            font-size: 16px;
            line-height: 19px;
            color: #1a2024;
            font-weight: 400;
        }
    }
    .footer_items_2 {
        display: flex;
        flex-direction: column;
        row-gap: 12px;
        height: 165px;
        justify-content: end;
        margin: 0;
        @media ${breakpoints.ml} {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0;
            height: auto;
        }
        // .footer_item {
        //     padding: 10px;
        // }
        .footer_txt {
            font-size: 18px;
            line-height: 22px;
            color: #000;
            font-weight: 600;
            margin: 0;
        }
        .footer_link {
            font-size: 16px;
            line-height: 19px;
            color: #1a2024;
            font-weight: 400;
        }
    }
    .footer_items_3 {
        display: flex;
        flex-direction: column;
        row-gap: 12px;
        justify-content: end;
        margin: 0;
        @media ${breakpoints.ml} {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0;
        }
        // .footer_item {
        //     padding: 10px;
        // }
        .footer_txt {
            font-size: 18px;
            line-height: 22px;
            color: #000;
            font-weight: 600;
            margin: 0;
        }
        .footer_link {
            font-size: 16px;
            line-height: 19px;
            color: #1a2024;
            font-weight: 400;
        }
    }
    // .appstore_app,
    // .google_app {
    //     @media ${breakpoints.tl} {
    //         width: 100%;
    //     }
    // }
    // .download_app {
    //     @media ${breakpoints.tl} {
    //         height: 50%;
    //         width: 100%;
    //         margin: auto;
    //     }
    // }
    .google_app,
    .appstore_app {
        max-width: 120px;
        width: 100%;
    }
    .footer_apps-txt {
        font-size: 18px;
        line-height: 22px;
        color: #000;
        font-weight: 600;
        margin: 0;
    }
    .footer_apps {
        display: flex;
        height: 90px;
        flex-direction: column;
        row-gap: 15px;
        align-items: flex-end;
        @media ${breakpoints.ml} {
            align-items: center;
            margin: 20px 0;
            flex-direction: column;
        }
    }
    .download_links {
        padding-bottom: 25px;
        @media ${breakpoints.tl} {
            position: absolute;
            bottom: 0;
            transform: translateX(-50%);
            left: 50%;
            display: flex;
            z-index: 999;
            column-gap: 5px;
        }
    }
`
export const Box = styled(MuiBox)`
    width: ${({ width }) => width || '100%'};
    background: ${({ background, transparent }) =>
        background || (transparent ? 'transparent' : '#fff')};
    border-radius: ${({ br }) => (br ? `${br}px` : 0)};
    max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : '100%')};
`
