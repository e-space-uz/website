import ApplicationCard from 'components/application/ApplicationCard'
import ApplicationList from 'components/application/ApplicationList'
import { useIsMobile } from 'hooks/useIsMobile'
import { useState } from 'react'
import { deviceSizes } from 'theme/breakpoint'
import { fetchMultipleRequest } from 'utils/fetchMultipleRequest'
import { format } from 'almoment'
import { Tag, Title } from 'components/common'
import { Link, useTranslation } from 'i18n'
import useDidUpdate from 'hooks/useDidUpdate'
import { parseCookies } from 'nookies'
import { requestWithAuth } from 'request/request'
import Table from '../../components/form/table/Table'
import { Box, Container, Wrapper } from '../../components/layout'
import SEO from '../../components/SEO'

const formatTableData = (applications) => {
    console.log('enimvnjrmv', applications)
    const formatted = applications?.entity_drafts?.map((entity, index) => ({
        id: entity.entity?.id
            ? `${entity?.entity.id}?entity=true&draft_id=${entity.id}`
            : `${entity?.id}?entity=false`,
        order_num: index + 1,
        application_num: entity?.entity_draft_number,
        name: entity.applicant.name,
        entity_number: entity?.entity?.entity_number
            ? entity.entity.entity_number
            : '-',
        city: entity.city.name,
        region: entity.region.name,
        district: entity.district.name,
        date_app: {
            date: format(entity.created_at, 'DD.MM.YYYY'),
            time: format(entity.created_at, 'hh:mm'),
        },
        status: {
            type: entity.status.code || '',
            text: entity.status.name,
        },
        entity_properties: applications.entity_properties,
    }))
    return formatted || []
}
export default function myApplicationPage({ applications }) {
    const [tableData, setTableData] = useState(formatTableData(applications))
    const [count, setCount] = useState(parseInt(applications?.count) || 0)
    const [page, setPage] = useState(1)
    const isMobile = useIsMobile(deviceSizes.tabletM)
    const { t } = useTranslation()
    const columnData = [
        {
            Header: '#',
            accessor: 'order_num',
        },
        {
            Header: t('applicationNum2'),
            accessor: 'application_num',
        },
        {
            Header: t('entityNum'),
            accessor: 'entity_number',
        },
        {
            Header: t('status'),
            accessor: 'status',
            Cell: ({ row }) => (
                <Tag
                    primary={
                        row.original.status.type === 'NEW_DRAFT' ? 'has' : ''
                    }
                    error={row.original.status.type === 'error' ? 'has' : ''}
                    warning={
                        row.original.status.type === 'VIEWING_DRAFT'
                            ? 'has'
                            : ''
                    }
                    neutral={
                        row.original.status.type === 'ENTITY_DRAFT_ACCEPTED'
                            ? 'has'
                            : ''
                    }
                    nowrap
                    centered
                >
                    {row.original.status.text}
                    {console.log(row.original.status)}
                </Tag>
            ),
        },

        {
            Header: t('dateApp'),
            accessor: 'date_app',
            Cell: ({ row }) => (
                <Box display="flex" alignItems="center">
                    {row.original.date_app.date}
                    <Tag neutral nowrap ml={1}>
                        {row.original.date_app.time}
                    </Tag>
                </Box>
            ),
        },
        {
            Header: t('village'),
            accessor: 'city',
        },
        {
            Header: t('region'),
            accessor: 'region',
        },
        {
            Header: t('district'),
            accessor: 'district',
        },

        {
            Header: '',
            accessor: 'link',
            Cell: ({ row }) => (
                <Link href={`/my-applications/${row.original.id}`}>
                    <a style={{ color: '#0E73F6' }}>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.99984 4.33333C10.5265 4.33333 12.7798 5.75333 13.8798 8C12.7798 10.2467 10.5332 11.6667 7.99984 11.6667C5.4665 11.6667 3.21984 10.2467 2.11984 8C3.21984 5.75333 5.47317 4.33333 7.99984 4.33333ZM7.99984 3C4.6665 3 1.81984 5.07333 0.666504 8C1.81984 10.9267 4.6665 13 7.99984 13C11.3332 13 14.1798 10.9267 15.3332 8C14.1798 5.07333 11.3332 3 7.99984 3ZM7.99984 6.33333C8.91984 6.33333 9.6665 7.08 9.6665 8C9.6665 8.92 8.91984 9.66667 7.99984 9.66667C7.07984 9.66667 6.33317 8.92 6.33317 8C6.33317 7.08 7.07984 6.33333 7.99984 6.33333ZM7.99984 5C6.3465 5 4.99984 6.34667 4.99984 8C4.99984 9.65333 6.3465 11 7.99984 11C9.65317 11 10.9998 9.65333 10.9998 8C10.9998 6.34667 9.65317 5 7.99984 5Z"
                                fill="#0E73F6"
                            />
                        </svg>
                    </a>
                </Link>
            ),
        },
    ]
    console.log('applications', applications)
    useDidUpdate(() => {
        requestWithAuth
            .get(`/entity-draft?limit=5&page=${page}`)
            .then(({ data }) => {
                setTableData(formatTableData(data))
                setCount(parseInt(data?.count) || 0)
            })
            .catch((err) => console.log(err))
    }, [page])
    return (
        <>
            <SEO />
            <Container>
                <Title section>{t('myOffers')}</Title>
                <Wrapper my={32} mx={2} px={0}>
                    <ApplicationList>
                        <Table
                            setCount={setCount}
                            count={count}
                            setTableData={setTableData}
                            formatTableData={formatTableData}
                            columns={columnData}
                            data={tableData}
                            noFilterHeader
                            py={24}
                            px={24}
                            setPage={setPage}
                            page={page}
                        />
                        {/* {!isMobile ? (
                        ) : (
                            <div>
                                {tableData?.map((item, index) => (
                                    <ApplicationCard key={index} data={item} />
                                ))}
                                {!tableData?.length ? (
                                    <ApplicationNotFound />
                                ) : (
                                    ''
                                )}
                            </div>
                        )} */}
                    </ApplicationList>
                </Wrapper>
            </Container>
        </>
    )
}
export async function getServerSideProps(ctx) {
    const { access_token } = parseCookies(ctx)
    if (!access_token) {
        return {
            redirect: {
                destination: '/',
            },
        }
    }
    const requests = [
        {
            endpoint: `${process.env.BASE_URL}/entity-draft?limit=5&page=1`,
            headers: {
                Authorization: access_token,
            },
        },
    ]
    const [applications] = await fetchMultipleRequest(requests)
    console.log('application => ', applications)
    return {
        props: {
            applications,
        },
    }
}
