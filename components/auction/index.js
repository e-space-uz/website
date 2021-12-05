import styled from 'styled-components'
import { breakpoints } from 'theme/breakpoint'

export const Container = styled.div`
    // background: ${(props) => props.theme.palette.primary[500]};
    width: 100%;
    color: ${(props) => props.theme.palette.white};
    display: flex;
    position: relative;
    .action_container {
        @media ${breakpoints.tl} {
        }
    }
    @media ${breakpoints.tl} {
        flex-direction: column-reverse;
        margin-bottom: 20px;
        padding: 20px;
    }

    @media ${breakpoints.mm} {
        margin-bottom: 5px;
    }
    .auction_wrapper {
        margin-top: 36px;
        border-radius: 10px;
        padding: 30px 24px;
        .auction_select {
            width: 100%;
            max-width: 130px;
            background: none;
            border: none;
            z-index: 999;
            @media ${breakpoints.tm} {
                max-width: inherit;
            }
        }
        .auction_menu {
            display: flex;
            align-items: center;
            column-gap: 4px;
            .auction_btn {
                margin-left: auto;
                background: #4094f726;
                color: #4094f7;
                border: #4094f726;
                @media ${breakpoints.tm} {
                    width: 100%;
                }
            }
            @media ${breakpoints.tm} {
                flex-direction: column;
                row-gap: 20px;
            }
            & > div {
                width: 100%;
                max-width: 360px;
                background: none;
                border: none;
                column-gap: 20px;
                @media ${breakpoints.tm} {
                    max-width: inherit;
                    flex-direction: column;
                    row-gap: 20px;
                    padding: 0;
                }
            }
        }
    }
    .auction_title {
        font-size: 20px;
        line-height: 28px;
        @media ${breakpoints.ts} {
            font-size: 16px;
            line-height: 24px;
            font-weight: 600;
        }
    }

    .auction_box {
        // background: ${(props) => props.theme.palette.primary[500]};
        padding: 30px 0 32px;
        position: relative;
        overflow: auto;
        grid-column-gap: 30px;
        display: -webkit-box;
        z-index: 2;
        ::-webkit-scrollbar {
            width: 24px;
            height: 8px;
            background-color: #4094f726;
        }
        ::-webkit-scrollbar-thumb {
            background-color: #4094f7;
            border-radius: 9em;
        }

        @media ${breakpoints.tl} {
            max-width: 100%;
            clip-path: none;
            flex-direction: column;
            row-gap: 20px;
        }
        // clip-path: polygon(0 0, 100% 0, 70% 100%, 0 100%);
        & > div {
            max-width: 290px;
            height: 100%;
            min-height: 170px;
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
                }
                @media ${breakpoints.mm} {
                    font-size: 16px;
                    line-height: 22px;
                }
            }
            .data_txt,
            .data_txt_2 {
                font-size: 14px;
                line-height: 20px;
                color: #00000099;
                font-weight: 600;
                margin-bottom: 16px;
                display: flex;
                align-items: center;
                column-gap: 5px;
                -webkit-line-clamp: 2;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                overflow: hidden;
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
        background: #ffff;
        color: #000000;
        flex-direction: column;
        align-items: center;
        width: 100%;
        border-radius: 12px;
        &:nth-last-child(5) {
            display: none;
        }
        .stepData_desc {
            padding: 12px 14px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            border: none;
        }
        .number {
            color: #0e73f6;
            font-size: 14px;
            line-height: 20px;
            font-weight: 600;
        }
        .status {
            color: #4094f7;
            // padding: 0 33px;
            width: 100%;
            max-width: 122px;
            text-align: center;
            background: #4094f726;
            border-radius: 6px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 14px;
        }
        & > div {
            padding: 12px 14px;
            display: flex;
            border-bottom: 1px solid #f6f6f6;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            @media ${breakpoints.ml} {
                text-align: center;
                margin: 0 auto;
            }
        }
    }
`
