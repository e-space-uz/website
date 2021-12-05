import { Dialog } from '@material-ui/core'
import styled, { keyframes } from 'styled-components'

export const StyledInfoDialog = styled(Dialog)`
    background: transparent;
    .MuiBackdrop-root {
        background: rgba(255, 255, 255, 0.8);
    }
    .MuiDialog-paper {
        background: transparent;
        box-shadow: none;
    }
    h2 {
        text-align: center;
    }
`
export const StyledDialog = styled(Dialog)`
    .MuiPaper-root {
        header {
            display: flex;
            padding: 12px 24px;
            justify-content: space-between;
            box-shadow: inset 0px -1px 0px #ebedee;
            button {
                background: transparent;
                border: 0;
            }
        }
        & > div {
            line-height: 24px;
            padding: 12px 24px;
            margin: 12px 0;
            a {
                color: ${({ theme }) => theme.palette.primary[600]};
            }
        }
    }
`
const checkmark = keyframes`
   0% {
          stroke-dashoffset: 100px
      }
  
      100% {
          stroke-dashoffset: 200px
      }
`
const checkmarkCircle = keyframes`
   0% {
          stroke-dashoffset: 480px 
      }
  
      100% {
          stroke-dashoffset: 960px
      }
`
const coloredCircle = keyframes`
  0% {
          opacity:0
      }
  
      100% {
          opacity:100
      }
`
export const AnimationContainer = styled.div`
    svg polyline {
        -webkit-animation: ${checkmark} 0.25s ease-in-out 0.7s backwards;
        animation: checkmark 0.25s ease-in-out 0.7s backwards;
    }
    svg circle {
        -webkit-animation: ${checkmarkCircle} 0.6s ease-in-out backwards;
        animation: ${checkmarkCircle} 0.6s ease-in-out backwards;
    }
    svg circle#colored {
        -webkit-animation: ${coloredCircle} 0.6s ease-in-out 0.7s backwards;
        animation: ${coloredCircle} 0.6s ease-in-out 0.7s backwards;
    }
`
