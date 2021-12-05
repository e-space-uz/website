import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/Tab'
import { Box, Tabs } from '@material-ui/core'
import { breakpoints } from 'theme/breakpoint'
import { Container } from 'components/layout'

export const StyledTab = styled(Tab)`
    background: #fff;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    text-transform: none;
    padding: 0;
    margin-right: 32px;
    min-height: 72px;
    transition: 0.3s;
    color: ${({ theme, filled }) =>
        filled ? theme.palette.primary[600] : theme.palette.grey.light};
    border-bottom: 4px solid
        ${({ theme, filled }) =>
            filled ? theme.palette.primary[600] : theme.palette.grey.light};
    margin-right: 32px;
    @media ${breakpoints.ts} {
        margin-right: 16px;
    }
    &:nth-last-child(1) {
        margin-right: 0;
    }
    &.Mui-selected {
        color: var(--main);
        border-bottom: 4px solid ${({ theme }) => theme.palette.primary[600]};
    }
    & .MuiTab-wrapper {
        align-items: flex-start;
    }
`
export const StyledTabs = styled(Tabs)`
    min-height: 64px;
    text-transform: capitalize;
    background: #fff;
    & .MuiTabs-indicator {
        display: none;
    }
    @media ${breakpoints.ml} {
        display: none;
    }
`
export const StyledAppBar = styled(AppBar)`
    box-shadow: none;
    background: #fff;
`
export const FormContainer = styled.form`
    margin: 52px 0 ${({ noShadow }) => (noShadow ? '0' : '32px')};
    background: #ffffff;
    box-shadow: ${({ noShadow }) =>
        noShadow ? 'none' : '0px 4px 40px rgba(0, 0, 0, 0.07)'};
    border-radius: 12px;
    padding: ${({ noShadow }) => (noShadow ? '0 2px' : '30px')};
    @media ${breakpoints.ml} {
        padding: ${({ noShadow }) => (noShadow ? '' : '12px')};
        margin: 32px
            ${({ noShadow, mlMargin }) =>
                noShadow ? `${mlMargin ? '12px 0' : '0 0'}` : '16px'};
    }
    & > .map_container {
        border-radius: 12px;
        overflow: hidden;
    }
    & > .map_container > div {
        cursor: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMSAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZCkiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYuMjg1NDggMTQuMzA5QzYuMDAxNDggMTMuOTUgNS42NTY0OCAxMy4yMTYgNS4wNDI0NyAxMi4zMjVDNC42OTQ0NyAxMS44MjEgMy44MzE0OCAxMC44NzIgMy41NzQ0OCAxMC4zOUMzLjM1MTQ4IDkuOTY0MDQgMy4zNzU0OCA5Ljc3MzA0IDMuNDI4NDggOS40MjAwNEMzLjUyMjQ4IDguNzkyMDQgNC4xNjY0OCA4LjMwMzA0IDQuODUzNDggOC4zNjkwNEM1LjM3MjQ4IDguNDE4MDQgNS44MTI0OCA4Ljc2MTA0IDYuMjA4NDggOS4wODUwNEM2LjQ0NzQ4IDkuMjgwMDQgNi43NDE0OCA5LjY1OTA0IDYuOTE4NDggOS44NzMwNEM3LjA4MTQ4IDEwLjA2OSA3LjEyMTQ3IDEwLjE1IDcuMjk1NDggMTAuMzgyQzcuNTI1NDggMTAuNjg5IDcuNTk3NDggMTAuODQxIDcuNTA5NDggMTAuNTAzQzcuNDM4NDggMTAuMDA3IDcuMzIyNDcgOS4xNjAwNCA3LjE1NDQ3IDguNDExMDRDNy4wMjY0NyA3Ljg0MzA0IDYuOTk1NDggNy43NTQwNCA2Ljg3MzQ4IDcuMzE4MDRDNi43NDQ0OCA2Ljg1NDA0IDYuNjc4NDggNi41MjkwNCA2LjU1NzQ4IDYuMDM3MDRDNi40NzM0NyA1LjY4OTA0IDYuMzIyNDcgNC45NzgwNCA2LjI4MTQ4IDQuNTc4MDRDNi4yMjQ0OCA0LjAzMTA0IDYuMTk0NDcgMy4xMzkwNCA2LjU0NTQ4IDIuNzI5MDRDNi44MjA0OCAyLjQwODA0IDcuNDUxNDggMi4zMTEwNCA3Ljg0MjQ3IDIuNTA5MDRDOC4zNTQ0OCAyLjc2ODA0IDguNjQ1NDcgMy41MTIwNCA4Ljc3ODQ3IDMuODA5MDRDOS4wMTc0NyA0LjM0MzA0IDkuMTY1NDcgNC45NjAwNCA5LjI5NDQ4IDUuNzcwMDRDOS40NTg0OCA2LjgwMTA0IDkuNzYwNDcgOC4yMzIwNCA5Ljc3MDQ3IDguNTMzMDRDOS43OTQ0OCA4LjE2NDA0IDkuNzAyNDggNy4zODcwNCA5Ljc2NjQ4IDcuMDMzMDRDOS44MjQ0OCA2LjcxMjA0IDEwLjA5NDUgNi4zMzkwNCAxMC40MzI1IDYuMjM4MDRDMTAuNzE4NSA2LjE1MzA0IDExLjA1MzUgNi4xMjIwNCAxMS4zNDg1IDYuMTgzMDRDMTEuNjYxNSA2LjI0NzA0IDExLjk5MTUgNi40NzEwNCAxMi4xMTQ1IDYuNjgyMDRDMTIuNDc2NSA3LjMwNjA0IDEyLjQ4MzUgOC41ODEwNCAxMi40OTg1IDguNTEzMDRDMTIuNTg0NSA4LjEzNzA0IDEyLjU2OTUgNy4yODQwNCAxMi43ODI1IDYuOTI5MDRDMTIuOTIyNSA2LjY5NTA0IDEzLjI3OTUgNi40ODQwNCAxMy40Njk1IDYuNDUwMDRDMTMuNzYzNSA2LjM5ODA0IDE0LjEyNDUgNi4zODIwNCAxNC40MzM1IDYuNDQyMDRDMTQuNjgyNSA2LjQ5MTA0IDE1LjAxOTUgNi43ODcwNCAxNS4xMTA1IDYuOTI5MDRDMTUuMzI4NSA3LjI3MzA0IDE1LjQ1MjUgOC4yNDYwNCAxNS40ODk1IDguNTg3MDRDMTUuNTA0NSA4LjcyODA0IDE1LjU2MzUgOC4xOTUwNCAxNS43ODI1IDcuODUxMDRDMTYuMTg4NSA3LjIxMjA0IDE3LjYyNTUgNy4wODgwNCAxNy42ODA1IDguNDkwMDRDMTcuNzA1NSA5LjE0NDA0IDE3LjcwMDUgOS4xMTQwNCAxNy43MDA1IDkuNTU0MDRDMTcuNzAwNSAxMC4wNzEgMTcuNjg4NSAxMC4zODIgMTcuNjYwNSAxMC43NTZDMTcuNjI5NSAxMS4xNTYgMTcuNTQzNSAxMi4wNiAxNy40MTg1IDEyLjQ5OEMxNy4zMzI1IDEyLjc5OSAxNy4wNDc1IDEzLjQ3NiAxNi43NjY1IDEzLjg4MkMxNi43NjY1IDEzLjg4MiAxNS42OTI1IDE1LjEzMiAxNS41NzU1IDE1LjY5NUMxNS40NTc1IDE2LjI1NyAxNS40OTY1IDE2LjI2MSAxNS40NzM1IDE2LjY2QzE1LjQ1MDUgMTcuMDU4IDE1LjU5NDUgMTcuNTgyIDE1LjU5NDUgMTcuNTgyQzE1LjU5NDUgMTcuNTgyIDE0Ljc5MjUgMTcuNjg2IDE0LjM2MDUgMTcuNjE3QzEzLjk2OTUgMTcuNTU0IDEzLjQ4NTUgMTYuNzc2IDEzLjM2MDUgMTYuNTM4QzEzLjE4ODUgMTYuMjEgMTIuODIxNSAxNi4yNzMgMTIuNjc4NSAxNi41MTVDMTIuNDUzNSAxNi44OTggMTEuOTY5NSAxNy41ODUgMTEuNjI3NSAxNy42MjhDMTAuOTU5NSAxNy43MTIgOS41NzM0NyAxNy42NTkgOC40ODg0NyAxNy42NDhDOC40ODg0NyAxNy42NDggOC42NzM0OCAxNi42MzcgOC4yNjE0OCAxNi4yOUM3Ljk1NjQ4IDE2LjAzMSA3LjQzMTQ4IDE1LjUwNiA3LjExNzQ4IDE1LjIzTDYuMjg1NDggMTQuMzA5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjI4NTQ4IDE0LjMwOUM2LjAwMTQ4IDEzLjk1IDUuNjU2NDggMTMuMjE2IDUuMDQyNDcgMTIuMzI1QzQuNjk0NDcgMTEuODIxIDMuODMxNDggMTAuODcyIDMuNTc0NDggMTAuMzlDMy4zNTE0OCA5Ljk2NDA0IDMuMzc1NDggOS43NzMwNCAzLjQyODQ4IDkuNDIwMDRDMy41MjI0OCA4Ljc5MjA0IDQuMTY2NDggOC4zMDMwNCA0Ljg1MzQ4IDguMzY5MDRDNS4zNzI0OCA4LjQxODA0IDUuODEyNDggOC43NjEwNCA2LjIwODQ4IDkuMDg1MDRDNi40NDc0OCA5LjI4MDA0IDYuNzQxNDggOS42NTkwNCA2LjkxODQ4IDkuODczMDRDNy4wODE0OCAxMC4wNjkgNy4xMjE0OCAxMC4xNSA3LjI5NTQ4IDEwLjM4MkM3LjUyNTQ4IDEwLjY4OSA3LjU5NzQ4IDEwLjg0MSA3LjUwOTQ4IDEwLjUwM0M3LjQzODQ4IDEwLjAwNyA3LjMyMjQ3IDkuMTYwMDQgNy4xNTQ0NyA4LjQxMTA0QzcuMDI2NDcgNy44NDMwNCA2Ljk5NTQ4IDcuNzU0MDQgNi44NzM0OCA3LjMxODA0QzYuNzQ0NDggNi44NTQwNCA2LjY3ODQ4IDYuNTI5MDQgNi41NTc0OCA2LjAzNzA0QzYuNDczNDggNS42ODkwNCA2LjMyMjQ4IDQuOTc4MDQgNi4yODE0OCA0LjU3ODA0QzYuMjI0NDggNC4wMzEwNCA2LjE5NDQ3IDMuMTM5MDQgNi41NDU0OCAyLjcyOTA0QzYuODIwNDggMi40MDgwNCA3LjQ1MTQ3IDIuMzExMDQgNy44NDI0NyAyLjUwOTA0QzguMzU0NDcgMi43NjgwNCA4LjY0NTQ3IDMuNTEyMDQgOC43Nzg0NyAzLjgwOTA0QzkuMDE3NDcgNC4zNDMwNCA5LjE2NTQ4IDQuOTYwMDQgOS4yOTQ0OCA1Ljc3MDA0QzkuNDU4NDggNi44MDEwNCA5Ljc2MDQ3IDguMjMyMDQgOS43NzA0NyA4LjUzMzA0QzkuNzk0NDcgOC4xNjQwNCA5LjcwMjQ4IDcuMzg3MDQgOS43NjY0OCA3LjAzMzA0QzkuODI0NDggNi43MTIwNCAxMC4wOTQ1IDYuMzM5MDQgMTAuNDMyNSA2LjIzODA0QzEwLjcxODUgNi4xNTMwNCAxMS4wNTM1IDYuMTIyMDQgMTEuMzQ4NSA2LjE4MzA0QzExLjY2MTUgNi4yNDcwNCAxMS45OTE1IDYuNDcxMDQgMTIuMTE0NSA2LjY4MjA0QzEyLjQ3NjUgNy4zMDYwNCAxMi40ODM1IDguNTgxMDQgMTIuNDk4NSA4LjUxMzA0QzEyLjU4NDUgOC4xMzcwNCAxMi41Njk1IDcuMjg0MDQgMTIuNzgyNSA2LjkyOTA0QzEyLjkyMjUgNi42OTUwNCAxMy4yNzk1IDYuNDg0MDQgMTMuNDY5NSA2LjQ1MDA0QzEzLjc2MzUgNi4zOTgwNCAxNC4xMjQ1IDYuMzgyMDQgMTQuNDMzNSA2LjQ0MjA0QzE0LjY4MjUgNi40OTEwNCAxNS4wMTk1IDYuNzg3MDQgMTUuMTEwNSA2LjkyOTA0QzE1LjMyODUgNy4yNzMwNCAxNS40NTI1IDguMjQ2MDQgMTUuNDg5NSA4LjU4NzA0QzE1LjUwNDUgOC43MjgwNCAxNS41NjM1IDguMTk1MDQgMTUuNzgyNSA3Ljg1MTA0QzE2LjE4ODUgNy4yMTIwNCAxNy42MjU1IDcuMDg4MDQgMTcuNjgwNSA4LjQ5MDA0QzE3LjcwNTUgOS4xNDQwNCAxNy43MDA1IDkuMTE0MDQgMTcuNzAwNSA5LjU1NDA0QzE3LjcwMDUgMTAuMDcxIDE3LjY4ODUgMTAuMzgyIDE3LjY2MDUgMTAuNzU2QzE3LjYyOTUgMTEuMTU2IDE3LjU0MzUgMTIuMDYgMTcuNDE4NSAxMi40OThDMTcuMzMyNSAxMi43OTkgMTcuMDQ3NSAxMy40NzYgMTYuNzY2NSAxMy44ODJDMTYuNzY2NSAxMy44ODIgMTUuNjkyNSAxNS4xMzIgMTUuNTc1NSAxNS42OTVDMTUuNDU3NSAxNi4yNTcgMTUuNDk2NSAxNi4yNjEgMTUuNDczNSAxNi42NkMxNS40NTA1IDE3LjA1OCAxNS41OTQ1IDE3LjU4MiAxNS41OTQ1IDE3LjU4MkMxNS41OTQ1IDE3LjU4MiAxNC43OTI1IDE3LjY4NiAxNC4zNjA1IDE3LjYxN0MxMy45Njk1IDE3LjU1NCAxMy40ODU1IDE2Ljc3NiAxMy4zNjA1IDE2LjUzOEMxMy4xODg1IDE2LjIxIDEyLjgyMTUgMTYuMjczIDEyLjY3ODUgMTYuNTE1QzEyLjQ1MzUgMTYuODk4IDExLjk2OTUgMTcuNTg1IDExLjYyNzUgMTcuNjI4QzEwLjk1OTUgMTcuNzEyIDkuNTczNDcgMTcuNjU5IDguNDg4NDcgMTcuNjQ4QzguNDg4NDcgMTcuNjQ4IDguNjczNDggMTYuNjM3IDguMjYxNDggMTYuMjlDNy45NTY0OCAxNi4wMzEgNy40MzE0OCAxNS41MDYgNy4xMTc0OCAxNS4yM0w2LjI4NTQ4IDE0LjMwOVoiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMC43NSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNC41MjA1IDE0LjY2MjRWMTEuMjAzNCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIwLjc1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTEyLjUwNTMgMTQuNjc2NEwxMi40ODkzIDExLjIwMzQiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMC43NSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMC41MDg4IDExLjIzMzhMMTAuNTI5OCAxNC42NTk4IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjAuNzUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2QiIHg9IjAuNCIgeT0iMC40IiB3aWR0aD0iMjEuMiIgaGVpZ2h0PSIyMi4yIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHk9IjEiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMS4zIi8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjMyIDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3ciIHJlc3VsdD0ic2hhcGUiLz4KPC9maWx0ZXI+CjwvZGVmcz4KPC9zdmc+Cg==')
                4 4,
            default !important;
        width: 100% !important;
        height: ${({ mapHeight }) =>
            mapHeight ? `${mapHeight}px !important` : '500px !important'};
        @media ${breakpoints.ml} {
            height: ${({ mapHeight }) =>
                mapHeight ? `${mapHeight}px !important` : '324px !important'};
        }
    }
`
export const FormSummaryContainer = styled.div`
    display: flex;
    padding: 0 16px;
    .form__base {
        min-width: 39.666667%;
        width: 100%;
        margin-left: 30px;
        flex-basis: 39.666667%;
    }
    & > div:nth-child(2) {
        min-width: 360;
        border: 1px solid #e5e5e5;
        border-radius: 12px;
    }
    & > div {
        padding: 16px;
    }
    @media ${breakpoints.ts} {
        flex-direction: column;
        & > div:nth-child(1) {
            margin-right: 0;
            margin-bottom: 32px;
        }
        & > div:nth-child(2) {
            min-width: 0;
            margin: 0 auto;
        }

        & > div {
            padding: 12px;
        }
    }
`
export const StyledTabContainer = styled(Container)`
    background: #ffffff;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.07);
    border-radius: 12px;
    padding: 30px;
    margin: 0 auto 32px;
    width: calc(100% - 64px);
    @media ${breakpoints.ls} {
        margin: 0 32px 32px;
    }
    @media ${breakpoints.ml} {
        padding: 16px;
        width: calc(100% - 24px);
        margin: 0 12px 32px;
    }
`
export const FormSectionContainer = styled.div`
    margin-bottom: 16px;
`
const calculatedChildWidth = ({ spacing, type }) =>
    `calc((100% - ${type !== 1 ? spacing : 0} * 8px) /
             ${type})`

export const Grid = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    max-width: ${({ type }) => (type === 1 ? '450px' : '100%')};
    & > div {
        width: ${(props) => calculatedChildWidth(props)};
        @media ${breakpoints.ml} {
            width: 100%;
        }
    }
`

export const FormActions = styled.div`
    display: flex;
    margin-top: 16px;
    margin-bottom: 20px;
    justify-content: flex-end;
    & > button:not(:nth-last-child(1)) {
        margin-right: 24px;
        @media ${breakpoints.ts} {
            margin: 0;
        }
    }
    @media ${breakpoints.ts} {
        flex-direction: column;
        row-gap: 15px;
    }
`
export const InputContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: ${({ width }) => width ?? '100%'};
    position: relative;
    input {
        background: ${({ hasValue, theme }) =>
            hasValue ? theme.palette.primary[600] : '#fff'};
        color: ${({ hasValue }) => (hasValue ? '#fff' : '#000')};
        padding-left: ${({ hasAdornment }) => (hasAdornment ? '28px' : '10px')};
    }
    & > span {
        user-select: none;
        pointer-events: none;
        position: absolute;
        top: 50%;
        left: 8px;
        transform: translateY(-50%);
        svg,
        path {
            ${({ hasValue }) => hasValue && `fill: #fff;`}
            ${({ hasValue }) => hasValue && `fill-opacity: 1;`}
        }
    }
`
export const InputLabel = styled.label`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.006em;
    color: #252c32;
    margin-bottom: 4px;
`
export const InvisibleInput = styled.input`
    height: 0;
    width: 0;
    opacity: 0;
    position: absolute;
    left: ${({ map }) => (map ? '24px' : '50%')};
    bottom: 0;
`
export const StyledSelect = styled.select`
    height: 40px;
    padding: 8px 12px;
    border: 1px solid #e5e9eb;
    border-radius: 6px;
    background: #fff;
    outline: 0;
    margin: 0;
    color: ${({ theme }) => theme.palette.grey.medium};
    width: 100%;
    &::placeholder {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 24px;
        letter-spacing: -0.006em;
        color: ${({ theme }) => theme.palette.grey.medium};
    }
`
export const StyledSelectOption = styled.option`
    padding: 16px;
    &:not(:first-of-type) {
        color: black;
    }
    &:first-of-type {
        display: none;
    }
`
export const StyledMap = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const StyledMapInner = styled.button`
    display: flex;
    align-items: center;
    background: transparent;
    color: ${({ theme }) => theme.palette.primary[600]};
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    height: 40px;
    padding: 4px;
    outline: 0;
    border: 0;
    & > svg {
        margin-right: 12px;
        min-width: 15px;
    }
`
export const InputAdornment = styled.div`
    position: absolute;
    top: 0,
    left: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`
