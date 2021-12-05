import React, { useState, useMemo } from 'react'
import styled from 'styled-components'
import { useTable } from 'react-table'
import ApplicationNotFound from 'components/application/ApplicationNotFound'
import { CircularProgress } from '@material-ui/core'
import { FilterIcon } from 'icons/map'
import { Button } from 'react-bootstrap'
import { breakpoints } from 'theme/breakpoint'
import { useIsMobile } from 'hooks/useIsMobile'
import { DoubleArrowRight } from 'icons'
import TableHeader from './TableHeader'
import TableFooter from './TableFooter'
import { Tag } from '../../common'
import { Link, useTranslation } from '../../../i18n'
import MapFilterDrawer from '../map/controls/MapFilterDrawer'

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
const TableContainer = styled.div`
    position: relative;
    table {
        border-spacing: 0;
        border: 1px solid #ededed;
        border-radius: 12px;
        overflow: hidden;
        border-collapse: separate !important;
        margin: 24px;
        @media ${breakpoints.ls} {
            margin: 0 0 24px 0;
        }
        width: calc(100% - 48px);
        thead {
            background: #f9f9f9;
            font-weight: normal;
            th {
                font-weight: normal;
            }
        }
        tr {
            :last-child {
                td {
                    border-bottom: 0;
                }
            }
        }
        th,
        td {
            margin: 0;
            padding: 16px 10px;
            border-bottom: 1px solid #ededed;
            border-right: 1px solid #ededed;
            text-align: left;
            :last-child {
                border-right: 0;
            }
        }
    }
`

function ReactTable({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({
            columns,
            data,
        })

    // Render the UI for your table
    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => (
                                <td {...cell.getCellProps()}>
                                    {cell.render('Cell')}
                                </td>
                            ))}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

function Table(props) {
    const {
        data,
        setTableData,
        formatTableData,
        count,
        setCount,
        columns,
        noFilterHeader,
        setPage,
        page,
    } = props
    const [isLoading, setIsLoading] = useState(false)
    const isMobile = useIsMobile()
    const [tablePage, setTablePage] = useState(1)
    const { t } = useTranslation()
    const [openDrawer, setOpenDrawer] = useState(false)
    const [options, setOptions] = useState({
        city: [],
        region: [],
        status: [],
    })
    const [values, setValues] = useState({
        region: null,
        status: [],
        city: null,
        apply: false,
    })
    const columnsData = useMemo(
        () => [
            {
                Header: t('applicationNum'),
                accessor: 'application_num',
            },
            {
                Header: t('status'),
                accessor: 'status',
                Cell: ({ row }) => (
                    <Tag
                        primary={
                            row.original.status.type === 'new' ? 'has' : ''
                        }
                        error={
                            row.original.status.type === 'error' ? 'has' : ''
                        }
                        warning={
                            row.original.status.type === 'warning' ? 'has' : ''
                        }
                        neutral={
                            row.original.status.type === 'neutral' ? 'has' : ''
                        }
                        nowrap
                        centered
                    >
                        {row.original.status.text}
                    </Tag>
                ),
            },
            {
                Header: t('date'),
                accessor: 'date_app',
            },
            {
                Header: t('auctionDate'),
                accessor: 'date_auction',
            },
            // {
            //     Header: t('address'),
            //     accessor: 'address',
            // },
            {
                Header: 'Viloyat',
                accessor: 'city',
            },
            {
                Header: 'Tuman',
                accessor: 'region',
            },
            {
                Header: 'Manzil',
                accessor: 'district',
            },
            {
                Header: '',
                accessor: 'link',
                Cell: ({ row }) => (
                    <Link href={`/applications/${row.original.id}`}>
                        <a style={{ color: '#0E73F6' }}>
                            <DoubleArrowRight />
                        </a>
                    </Link>
                ),
            },
        ],
        [],
    )

    return (
        <TableContainer {...props} id="table">
            {!noFilterHeader ? (
                <TableHeader
                    setCount={setCount}
                    setIsLoading={setIsLoading}
                    setTableData={setTableData}
                    formatTableData={formatTableData}
                    page={page || tablePage}
                    setPage={setPage || setTablePage}
                    tableData={data}
                />
            ) : (
                ''
            )}
            <div style={{ overflow: 'auto' }}>
                {data?.length ? (
                    <>
                        <ReactTable
                            columns={columns || columnsData}
                            data={data}
                        />
                    </>
                ) : (
                    <ApplicationNotFound />
                )}
            </div>
            {data?.length ? (
                <TableFooter
                    count={count}
                    page={page || tablePage}
                    setPage={setPage || setTablePage}
                />
            ) : (
                ''
            )}
            <LoadingBox show={isLoading}>
                <CircularProgress />
            </LoadingBox>
        </TableContainer>
    )
}

export default Table
