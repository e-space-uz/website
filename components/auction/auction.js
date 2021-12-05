import React, { useEffect, useState } from 'react'
import { useTranslation } from 'i18n'
import { request } from 'request/request'
import useDidUpdate from 'hooks/useDidUpdate'
import Button from 'components/form/button/Button'
import { Box, CircularProgress } from '@material-ui/core'
import styled from 'styled-components'
import { useRouter } from 'next/router'
// import ApplicationNotFound from 'components/application/ApplicationNotFound'
import TableFooter from 'components/form/table/TableFooter'
import { format } from 'almoment'
import TableAuction from 'components/form/table/TableAuction'
import { Container } from '.'
import { Title } from '../common'
import { Wrapper } from '../layout'
import Step from './Step'

const LoadingBox = styled.div`
    position: absolute;
    top: -1px;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ show }) =>
        show ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0)'};
    visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.1s;
`
const formatTableData = (apply) => {
    const formatted = apply?.entities?.map((entity) => ({
        id: entity.id,
        application_num: entity.entity_number,
        cadastral_num: entity.kadastr_number,
        date_app: format(entity.created_at, 'DD.MM.YYYY'),
        status: {
            type: entity.status.code === 'ENTITY_NEW' ? 'new' : '',
            text: entity.status.name,
        },
        region: entity.region.name,
        date_auction: format(entity.created_at, 'DD.MM.YYYY'),
        address: entity.address,
        city: entity.city.name,
        district: entity.district.name,
    }))
    return formatted || []
}
function Auction({ setPage, page, apply, data }) {
    const { t } = useTranslation()

    const [tableData, setTableData] = useState(apply)
    const [count, setCount] = useState(parseInt(apply?.count) || 0)
    const [tablePage, setTablePage] = useState(1)
    const [isLoading, setIsLoading] = useState(false)

    console.log('TABLE DATA ====>', tableData)

    return (
        <>
            <Container
                style={{
                    flexDirection: 'column',
                    margin: '0 auto',
                }}
                className="action_container"
            >
                <Wrapper className="auction_wrapper">
                    <LoadingBox show={isLoading} style={{ zIndex: '111' }}>
                        <CircularProgress />
                    </LoadingBox>
                    <Box className="auction_menu">
                        <Title
                            section
                            style={{ margin: '0', textAlign: 'left' }}
                            className="auction_title"
                        >
                            {t('Auksiondagi yer uchastkalari')}
                        </Title>
                        <TableAuction
                            setCount={setCount}
                            setIsLoading={setIsLoading}
                            setTableData={setTableData}
                            formatTableData={formatTableData}
                            page={page || tablePage}
                            setPage={setPage || setTablePage}
                        />
                        <Button primary className="auction_btn">
                            <a href="#table">{t('look')}</a>
                        </Button>
                    </Box>
                    {tableData?.length ? (
                        <>
                            <div className="auction_box">
                                <Step data={tableData} />
                            </div>
                        </>
                    ) : (
                        <></>
                    )}
                </Wrapper>
            </Container>
        </>
    )
}

export default Auction
