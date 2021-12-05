import styled from 'styled-components'
import TextareaAutosize from 'react-textarea-autosize'
import InputMask from 'react-input-mask'
import { DatePicker } from '@material-ui/pickers'
import { TruncatedText } from '../../common'

export const StyledInputPhone = styled(InputMask)`
    height: 40px;
    padding: 8px 12px;
    border: 1px solid #e5e9eb;
    border-radius: 6px;
    background: #fff;
    outline: 0;
    margin: 0;
    width: 100%;
    line-height: 24px;
    font-size: 14px;
    transition: 0.1s;
    &:hover {
        border-color: #b3b3b3;
    }
    &:focus {
        border-color: ${({ theme }) => theme.palette.primary[600]};
        box-shadow: 0 0 0 1px ${({ theme }) => theme.palette.primary[600]};
    }
    &:disabled {
        background: rgba(246, 248, 249, 1);
    }
    &::placeholder {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 24px;
        letter-spacing: -0.006em;
        color: ${({ theme }) => theme.palette.grey.medium};
    }
`
export const StyledDatePicker = styled(DatePicker)`
    min-width: 100px;
    width: 100%;
    .MuiTextField-root {
        width: 100%;
        margin: 0;
    }
    .MuiFormControl-root {
        margin: 0;
    }
    input {
        background: #fff;
        height: 40px;
        border: 1px solid #e5e9eb;
        border-radius: 6px;
        box-sizing: border-box;
        padding: 0 10px;
        color: #000;
        font-size: 14px;
        cursor: pointer;
        &::placeholder {
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 24px;
            letter-spacing: -0.006em;
            color: #9aa6ac;
            opacity: 1;
        }
        &:hover {
            border-color: #b3b3b3;
        }
        &:focus {
            border-color: ${({ theme }) => theme.palette.primary[600]};

            box-shadow: 0 0 0 1px ${({ theme }) => theme.palette.primary[600]};
        }
        &:disabled {
            background: rgba(246, 248, 249, 1);
        }
    }
    .MuiInput-root:after,
    .MuiInput-root:before {
        display: none;
    }
    .MuiInput-root:hover {
        border: 0;
    }
    .MuiInput-underline:after {
        display: none;
    }
    .MuiInput-underline:hover:not(.Mui-disabled):before {
        border: 0;
    }
`
export const StyledTextArea = styled(TextareaAutosize)`
    border: 1px solid #e5e9eb;
    padding: 8px 12px;
    border-radius: 6px;
    background: #fff;
    outline: 0;
    resize: vertical;
    width: 100%;
    line-height: 24px;
    transition: 0.1s;
    &:hover {
        border-color: #b3b3b3;
    }
    &:focus {
        border-color: ${({ theme }) => theme.palette.primary[500]};

        box-shadow: 0 0 0 1px ${({ theme }) => theme.palette.primary[500]};
    }
    &::placeholder {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 24px;
        letter-spacing: -0.006em;
        color: ${({ theme }) => theme.palette.grey.medium};
    }
`
export const StyledInput = styled.input`
    height: 40px;
    padding: 8px 12px;
    border: 1px solid #e5e9eb;
    border-radius: 6px;
    background: #fff;
    outline: 0;
    margin: 0;
    width: 100%;
    line-height: 24px;
    font-size: 14px;
    transition: 0.1s;
    min-width: 100px;
    padding-left: ${({ adornment }) =>
        adornment ? '40px !important' : '12px'};
    &:hover {
        border-color: #b3b3b3;
    }
    &:focus {
        border-color: ${({ theme }) => theme.palette.primary[600]};

        box-shadow: 0 0 0 1px ${({ theme }) => theme.palette.primary[600]};
    }
    &:disabled {
        background: rgba(246, 248, 249, 1);
    }
    &::placeholder {
        width: 100%;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 24px;
        letter-spacing: -0.006em;
        color: ${({ theme }) => theme.palette.grey.medium};
        text-overflow: ellipsis;
    }
`
export const StyledInputFileContainer = styled.div`
    height: 40px;
    border: 1px solid #e5e9eb;
    border-radius: 6px;
    background: #fff;
    outline: 0;
    margin: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &::placeholder {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 24px;
        letter-spacing: -0.006em;
        color: ${({ theme }) => theme.palette.grey.medium};
    }
    input {
        width: 0;
        position: absolute;
        z-index: -1;
        visibility: hidden;
        opacity: 0;
    }
    label {
        font-size: 14px;
        line-height: 24px;
        padding: 8px 12px;
        border-left: 1px solid #e5e9eb;
        cursor: pointer;
        white-space: nowrap;
    }
`
export const StyledInnerFile = styled(TruncatedText)`
    color: ${({ theme, hasValue }) =>
        hasValue ? '#000' : theme.palette.grey.medium};
    padding: 0 12px;
    font-size: 14px;
    line-height: 24px;
`

export const StyledLabelFile = styled.input`
    height: 40px;
    padding: 8px 12px;
    border: 1px solid #e5e9eb;
    border-radius: 6px;
    background: #fff;
    outline: 0;
    margin: 0;
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
