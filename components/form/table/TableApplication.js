import React, { useState, useMemo } from 'react'
import styled from 'styled-components'
import { useTable } from 'react-table'
import ApplicationNotFound from 'components/application/ApplicationNotFound'
import { CircularProgress } from '@material-ui/core'
import { DoubleArrowRight } from 'icons'
import TableHeader from './TableHeader'
import TableFooter from './TableFooter'
import { Tag } from '../../common'
import { Link, useTranslation } from '../../../i18n'

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
        margin: 24px;
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
                                {column.render('Name')}
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
                                    {cell.render('Time')}
                                </td>
                            ))}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

function TableApplication(props) {
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
    const [tablePage, setTablePage] = useState(1)
    const { t } = useTranslation()
    const columnsData = useMemo(
        () => [
            {
                Header: t('applicationNum'),
                accessor: 'application_num',
            },
            {
                Header: t('address'),
                accessor: 'status',
            },
        ],
        [],
    )

    return (
        <TableContainer {...props}>
            {data?.length ? (
                <>
                    <ReactTable columns={columns || columnsData} data={data} />
                </>
            ) : (
                <ApplicationNotFound />
            )}
            <LoadingBox show={isLoading}>
                <CircularProgress />
            </LoadingBox>
        </TableContainer>
    )
}

export default TableApplication
