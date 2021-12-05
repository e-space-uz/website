import styled from 'styled-components'

export const OneIdBannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.palette.primary[600]};
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    padding: 32px;
    h1 {
        font-style: normal;
        font-weight: bold;
        font-size: 48px;
        line-height: 58px;
        color: #fff;
    }
`
export const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    min-height: 100vh;
    padding: 48px;
    p {
        color: #3c464e;
    }

    & > form {
        display: flex;
        flex-direction: column;
        & > p:nth-last-of-type(1) {
            margin-top: 12px;
            a {
                color: ${({ theme }) => theme.palette.primary[600]};
            }
        }
        & button {
            width: 100%;
        }
        & label {
            margin-bottom: 16px;
        }
    }
`
