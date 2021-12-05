import styled from 'styled-components'
import Pagination from '@material-ui/lab/Pagination'
import { breakpoints } from 'theme/breakpoint'

export const StyledTableHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    flex-wrap: wrap;
    @media ${breakpoints.tm} {
        margin-bottom: 4px;
    }
    @media ${breakpoints.ls} {
        padding: 0;
    }
    & > div {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
        @media ${breakpoints.ls} {
            margin-left: auto;
            column-gap: 10px;
            padding: 0;
        }

        @media ${breakpoints.ts} {
            width: 100%;
            column-gap: 10px;
        }
        & > div {
            margin: 0;
            &:not(:nth-last-child(1)) {
                margin-right: 8px;
                @media ${breakpoints.ls} {
                    margin: 0;
                }
                @media ${breakpoints.ts} {
                    width: 100%;
                }
            }
        }
    }
    .header_table {
        @media ${breakpoints.ls} {
            width: 100%;
        }
        @media ${breakpoints.ts} {
            flex-wrap: wrap;
            row-gap: 12px;
        }
    }
`
export const StyledTableAuction = styled.div`
    display: flex;
    justify-content: space-between;
    column-gap: 20px;
    align-items: center;
    padding: 0 24px;
    & > div {
        display: flex;
        align-items: center;
        z-index: 999;
        @media ${breakpoints.ls} {
            margin-left: auto;
            column-gap: 10px;
        }
        @media ${breakpoints.ts} {
            width: 100%;
            column-gap: 10px;
        }
        & > div {
            margin: 0;
            &:not(:nth-last-child(1)) {
                margin-right: 8px;
                @media ${breakpoints.ls} {
                    margin: 0;
                }
                @media ${breakpoints.ts} {
                    width: 100%;
                }
            }
        }
    }
    .header_table {
        @media ${breakpoints.ls} {
            width: 100%;
        }
        @media ${breakpoints.ts} {
            flex-wrap: wrap;
            row-gap: 12px;
        }
    }
`
export const StyledTableFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 24px 16px;
    border-top: 1px solid #ededed;
    & > p {
        font-size: 14px;
    }
    @media ${breakpoints.ts} {
        flex-direction: column;
    }
`
export const StyledPagination = styled(Pagination)`
    ul {
        li {
            button {
                border-radius: 6px;
                border: 1px solid transparent;
                background-color: transparent;
                color: #252c32;
                &.Mui-selected {
                    background-color: transparent;
                    border: 1px solid #e5e9eb;
                    font-weight: 500;
                    color: ${({ theme }) => theme.palette.primary[600]};
                    &:hover {
                        background-color: transparent;
                    }
                }

                &:hover {
                    background-color: transparent;
                }
                span {
                    display: none;
                }
            }
        }
    }
`
