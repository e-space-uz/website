import Timeline from '@material-ui/lab/Timeline'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import styled from 'styled-components'
import { breakpoints } from 'theme/breakpoint'

export const PeriodLineContainer = styled.div`
    padding: 24px;
    text-align: center;
    border: 1px solid
        ${({ bordered }) => (bordered ? 'rgba(0, 0, 0, 0.1)' : 'transparent')};
    border-radius: 12px;
    background: #fff;
    @media ${breakpoints.ml} {
        padding: 12px;
    }
`

export const StyledTimeline = styled(Timeline)`
    padding: 0;
`
export const StyledTimelineItem = styled(TimelineItem)`
    padding: 0;
    &::before {
        display: none;
    }
`
export const StyledTimelineSeparator = styled(TimelineSeparator)`
    position: relative;
    margin: 0 20px;
    & > span:nth-child(1) {
        background: ${({ theme, reached }) =>
            reached ? theme.palette.primary[500] : '#DDE2E4'};
        height: 8px;
        width: 8px;
        box-shadow: none;
        margin: 0;
        &::before {
            content: '';
            position: absolute;
            display: ${({ current }) => (current ? 'block' : 'none')};
            top: -2px;
            left: -2px;
            height: 15px;
            width: 16px;
            border: 4px solid ${({ theme }) => theme.palette.primary[500]};
            border-radius: 50%;
            z-index: 2;
        }
    }
    & > span:nth-child(2) {
        background: ${({ theme, reached, current }) =>
            !current && reached ? theme.palette.primary[500] : '#DDE2E4'};
    }
`
export const StyledTimelineContent = styled(TimelineContent)`
    flex-grow: ${({ fullWidth }) => (fullWidth ? '1' : '0')};
    margin-bottom: 24px;
    padding: 0;
    & > div {
        margin-bottom: 10px;
    }
`
