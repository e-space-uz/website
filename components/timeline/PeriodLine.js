import React from 'react'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import { format } from 'almoment'
import TimelineDot from '@material-ui/lab/TimelineDot'
import {
    PeriodLineContainer,
    StyledTimeline,
    StyledTimelineContent,
    StyledTimelineItem,
    StyledTimelineSeparator,
} from '.'
import { Leading, Tag, Title } from '../common'
import { CalendarIcon, ClockIcon } from '../../icons/form'
import { useTranslation } from '../../i18n'

export default function PeriodLine({ data }) {
    const { t } = useTranslation('common')
    return (
        <PeriodLineContainer bordered>
            {data?.action_histories ? (
                <StyledTimeline>
                    {data?.action_histories?.map((item, i) => (
                        <StyledTimelineItem key={i}>
                            <StyledTimelineContent>
                                <Tag height={32} inline>
                                    <CalendarIcon />
                                    <span>
                                        {format(item?.created_at, 'DD.MM.YYYY')}
                                    </span>
                                </Tag>
                                <Tag height={32} inline>
                                    <ClockIcon />
                                    <span>
                                        {format(item?.created_at, 'hh:mm')}
                                    </span>
                                </Tag>
                            </StyledTimelineContent>
                            <StyledTimelineSeparator
                                current={item.current}
                                reached={item.reached}
                            >
                                <TimelineDot />
                                <TimelineConnector />
                            </StyledTimelineSeparator>
                            <StyledTimelineContent fullWidth>
                                <Title as="h4" fontSize={14} left>
                                    {item?.user?.organization?.name}
                                </Title>
                                <Leading
                                    color="#5B6871"
                                    fontSize={14}
                                    mt={4}
                                    key={i}
                                >
                                    {item?.user?.first_name}{' '}
                                    {item?.user?.last_name} {item?.action}
                                </Leading>
                            </StyledTimelineContent>
                        </StyledTimelineItem>
                    ))}
                </StyledTimeline>
            ) : (
                t('do')
            )}
        </PeriodLineContainer>
    )
}
