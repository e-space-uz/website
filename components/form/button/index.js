import { fadeIn } from 'components/common/keyframes'
import styled from 'styled-components'
import { breakpoints } from 'theme/breakpoint'

export const StyledButton = styled.button`
    outline: 0;
    border: 0;
    width: ${({ width, fullWidth }) =>
        fullWidth ? '100%' : width ? `${width}px` : 'auto'};
    height: ${({ small, middle, large }) =>
        small ? 36 : middle ? 40 : large ? 48 : 40}px;
    padding: 0
        ${({ small, middle, large }) =>
            small ? 8 : middle ? 12 : large ? 26 : 8}px;
    font-style: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: ${({ fontWeight }) => fontWeight ?? 600};
    font-size: ${({ small, middle, large }) =>
        small ? 14 : middle ? 14 : large ? 18 : 14}px;
    line-height: 24px;
    border-radius: 6px;
    min-width: ${({ icon, minWidth }) => minWidth ?? (icon ? 40 : 150)}px;
    border: 1px solid
        ${({ secondary, primary, theme, noBorder }) =>
            noBorder
                ? 'transparent'
                : !secondary
                ? primary
                    ? theme.palette.primary[600]
                    : noBorder
                    ? 'transparent'
                    : theme.palette.primary[600]
                : '#f5f5f5'};
    color: ${({ secondary, primary, theme, color }) =>
        !secondary
            ? primary
                ? '#fff'
                : color || theme.palette.primary[600]
            : color || '#acacac'};
    background: ${({ secondary, theme, primary, background }) =>
        background ??
        (!secondary
            ? primary
                ? theme.palette.primary[600]
                : '#fff'
            : '#f5f5f5')};
    @media ${breakpoints.ml} {
        min-width: ${({ icon, minWidth }) => minWidth ?? (icon ? 40 : 100)}px;
    }
    & > span {
        display: inline-flex;
        padding: 0
            ${({ small, middle, large }) =>
                small ? 8 : middle ? 12 : large ? 26 : 8}px;
        align-items: center;
        animation: 0.2s ${fadeIn} ease-in forwards;
        white-space: nowrap;
    }
`
export const StyledIconButton = styled(StyledButton)`
    width: 40px;
    min-width: 40px;
    border: 1px solid #e5e9eb;
`
