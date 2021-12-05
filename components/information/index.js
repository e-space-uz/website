import styled from 'styled-components'
import { breakpoints } from 'theme/breakpoint'

export const Container = styled.div`
    // background: ${(props) => props.theme.palette.primary[500]};
    width: 100%;
    color: ${(props) => props.theme.palette.white};
    display: flex;
    position: relative;
    margin-bottom: 64px;
    @media ${breakpoints.tl} {
        flex-direction: column-reverse;
    }
    @media ${breakpoints.ts} {
        margin-bottom: 20px;
    }
    @media ${breakpoints.mm} {
        margin-bottom: 5px;
    }
    .information_title{
         @media ${breakpoints.ts} {
        font-size: 24px;
    }
    }
    & > div > div {
        // background: ${(props) => props.theme.palette.primary[500]};
        position: relative;
        z-index: 2;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        row-gap: 20px;
        @media ${breakpoints.tl} {
            max-width: 100%;
            clip-path: none;
            justify-content: center;

        }
        // clip-path: polygon(0 0, 100% 0, 70% 100%, 0 100%);
        & > div {
            max-width: 500px;
            @media ${breakpoints.tl} {
                max-width: 100%;
            }
            span {
                max-width: 54px;
                width: 100%;
                height: 54px;
                display: block;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.2);
                font-style: normal;
                font-weight: 600;
                font-size: 24px;
                display: flex;
                justify-content: center;
                align-items: center;
                line-height: 29px;
            }
            h4 {
                font-weight: 600;
                font-size: 19px;
                line-height: 28px;
                margin: 0 0 8px;
                text-align: center;
                @media ${breakpoints.tm} {
                    font-size: 16px;
                    line-height: 26px;
                    text-align: start;
                }
                @media ${breakpoints.mm} {
                    font-size: 16px;
                    line-height: 22px;
                    text-align: start;
                }
            }
            p {
                font-weight: normal;
                font-size: 14px;
                text-align: center;
                line-height: 24px;
                color: #000;
                margin-bottom: 32px;
                @media ${breakpoints.tm} {
                    font-size: 16px;
                    line-height: 20px;
                    text-align: start;

                }
                @media ${breakpoints.mm} {
                    font-size: 15px;
                    line-height: 18px;
                    text-align: start;
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
        color: #000000;
        padding: 24px 16px;
        flex-direction: column;
        align-items: center;
        max-width: 300px;
        width: 100%;
        row-gap: 10px;
        border-radius: 12px;
        & > div {
            width: 100%;
            margin-right: auto;
            position: relative;
            @media ${breakpoints.ml} {
                text-align: center;
                margin: 0 auto;
            }
        }
        &:nth-of-type(2) div {
            position: relative;
            ::after {
                content : url(../images/Line_Indicator-1.svg);
                position: absolute;
                top: -64%;
                right: -37%;
                 @media ${breakpoints.lm} {
               display: none;
            }
            }
        }
        &:nth-of-type(1) div{
            ::after {
                content : url(../images/Line_Indicator-2.svg);
                position: absolute;
                top: -41%;
                right: -37%;
                @media ${breakpoints.lm} {
               display: none;
            }
            }
        }
        &:nth-of-type(3) div{
             ::after {
                content : url(../images/Line_Indicator.svg);
                position: absolute;
                top: -34%;
                right: -42%;
                 @media ${breakpoints.lm} {
               display: none;
            }
            }
        }
        .information_card-img {
            width: 100%;
            max-width: 72px;
            min-height: 72px;
            object-fit: cover;
            position: relative;
            top: 0;
            right: 0;
        }
        @media ${breakpoints.ml} {
            flex-direction: inherit;
            max-width: 100%;
            align-items: flex-start;
            column-gap: 16px;
            color: #000000;
            padding: 16px 8px;
        }
`
export const ExtraPart = styled.div`
    // background: url(${(props) => props.img});
    background: #eeeeee;
    padding: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    @media ${breakpoints.tl} {
        flex-direction: column;
    }
    // margin-bottom: 100px;
    & > div {
        padding: 80px 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        @media ${breakpoints.ls} {
            width: 100%;
        }
        @media ${breakpoints.ml} {
            padding: 50px 30px;
        }
        p {
            font-weight: 500;
            max-width: 558px;
            font-size: 20px;
            line-height: 32px;
            border-bottom: 2px solid #d5dadd;
            padding-bottom: 40px;
            color: #3c464e;
            margin-bottom: 30px;
            margin-left: auto;
            @media ${breakpoints.lb} {
                margin-left: 0;
            }
            @media ${breakpoints.tl} {
                margin: 0 auto;
                text-align: center;
            }
            @media ${breakpoints.ts} {
                font-size: 18px;
                line-height: 29px;
            }
            @media ${breakpoints.mm} {
                font-size: 16px;
                line-height: 20px;
            }
        }
    }
    .information_banner {
        max-width: 100%;
    }
    .information_banner-card {
        @media ${breakpoints.tl} {
            display: flex;
            justify-content: center;
            display: inline-block;
        }
        .information_banner {
            max-width: 558px;
            background: #f9f9f9;
            border-radius: 10px;
            padding: 24px;
            @media ${breakpoints.tl} {
                margin: 0 auto;
            }
            .information_txts {
                display: flex;
                justify-content: space-between;
                & > a {
                    color: #0e73f6;
                }
            }
            .information_banner-txt {
                font-weight: 600;
                font-size: 22px;
                line-height: 26px;
                text-align: left;
                color: #000;
                margin: 0 0 24px 0;
                max-width: 100%;
            }
            .information_cards {
                display: flex;
                flex-wrap: wrap;
                column-gap: 20px;
                justify-content: center;
                row-gap: 16px;
                & > div {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    row-gap: 12px;
                    .play_icon {
                        position: absolute;
                        bottom: 50%;
                        left: 50%;
                        width: 30px;
                        height: 25px;
                        outline: none;
                        border: none;
                        color: #fff;
                        background: none;
                        transform: translate(-50%, -50%) scale(1);
                        z-index: 10;
                        transition: all 0.2s ease-in-out;
                        &:hover {
                            transform: translate(-50%, -50%) scale(1.1);
                        }
                        @media ${breakpoints.ts} {
                            width: 50px;
                            height: 50px;
                        }
                        @media ${breakpoints.ml} {
                            width: 40px;
                            height: 40px;
                        }
                        @media ${breakpoints.mm} {
                            width: 30px;
                            height: 30px;
                        }
                    }
                    & > img {
                        width: 100%;
                        max-width: 245px;
                        object-fit: cover;
                    }
                    & > span {
                        max-width: 233px;
                        font-size: 14px;
                        color: #5b6871;
                        font-weight: 400;
                        line-height: 20px;
                    }
                }
            }
        }
    }
    .extraPart_btns {
        display: flex;
        justify-content: flex-end;
        column-gap: 30px;
        margin-top: 24px;
        max-width: 520px;
        // @media ${breakpoints.tl} {
        //     justify-content: center;
        // }
        @media ${breakpoints.lb} {
            justify-content: start;
        }
        @media ${breakpoints.tl} {
            justify-content: end;
        }
        @media ${breakpoints.ml} {
            flex-direction: column;
            row-gap: 20px;
            align-items: center;
            margin: 24px auto;
        }
    }
    .extraPart_btn {
        max-width: 265px;
        width: 100%;
        @media ${breakpoints.ml} {
            width: 100%;
        }

        &:nth-child(2) {
            color: #000;
        }
    }
`
export const VideoBox = styled.div`
    position: relative;
    max-width: 950px;
    width: 100%;
    max-height: 484px;
    height: 100%;
    padding: 24px;
    margin: 0 auto;
    margin-bottom: 64px;
    border-radius: 10px;
    background-color: #fff;
    .video_player {
        width: 100%;
    }
`
export const PlayButton = styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80px;
    height: 80px;
    outline: none;
    border: none;
    background: none;
    transform: translate(-50%, -50%) scale(1);
    z-index: 10;
    transition: all 0.2s ease-in-out;
    &:hover {
        transform: translate(-50%, -50%) scale(1.1);
    }
    @media ${breakpoints.ts} {
        width: 50px;
        height: 50px;
    }
    @media ${breakpoints.ml} {
        width: 40px;
        height: 40px;
    }
    @media ${breakpoints.mm} {
        width: 30px;
        height: 30px;
    }
`
