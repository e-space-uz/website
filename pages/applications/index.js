import ApplicationCard from 'components/application/ApplicationCard'
import ApplicationFilter from 'components/application/ApplicationFilter'
import ApplicationList from 'components/application/ApplicationList'
import { useIsMobile } from 'hooks/useIsMobile'
import { useState } from 'react'
import { deviceSizes } from 'theme/breakpoint'
import { fetchMultipleRequest } from 'utils/fetchMultipleRequest'
import { format } from 'almoment'
import Table from '../../components/form/table/Table'
import { Box, Wrapper } from '../../components/layout'
import SEO from '../../components/SEO'

const formatTableData = (applications) => {
    const formatted = applications?.entities?.map((entity) => ({
        id: entity?.id,
        application_num: entity?.entity_number,
        cadastral_num: entity?.kadastr_number,
        date_app: format(entity?.created_at, 'DD.MM.YYYY'),
        status: {
            type: entity?.status.code === 'ENTITY_NEW' ? 'new' : '',
            text: entity?.status.name,
        },
        region: entity?.region?.name,
        date_auction: format(entity?.created_at, 'DD.MM.YYYY'),
        address: entity?.address,
    }))
    return formatted || []
}
export default function applicationPage({ applications }) {
    const [tableData, setTableData] = useState(formatTableData(applications))
    const [count, setCount] = useState(parseInt(applications?.count) || 0)
    const isMobile = useIsMobile(deviceSizes.tabletM)
    console.log(applications)
    return (
        <>
            <SEO />
            <Box background="#f5f5f5">
                {isMobile ? (
                    <ApplicationFilter setTableData={setTableData} />
                ) : (
                    ''
                )}
                <Wrapper my={32} px={0}>
                    <ApplicationList>
                        {!isMobile ? (
                            <Table
                                setCount={setCount}
                                count={count}
                                setTableData={setTableData}
                                formatTableData={formatTableData}
                                data={tableData}
                                py={24}
                                px={24}
                            />
                        ) : (
                            <div>
                                {tableData?.map((item, index) => (
                                    <ApplicationCard key={index} data={item} />
                                ))}
                            </div>
                        )}
                    </ApplicationList>
                </Wrapper>
            </Box>
        </>
    )
}
export async function getServerSideProps() {
    const requests = [`${process.env.BASE_URL}/entity?limit=5`]
    const [applications] = await fetchMultipleRequest(requests)
    return {
        props: {
            applications,
        },
    }
}
