import { Box } from '@material-ui/core'
import { useState, useEffect } from 'react'
import useDidUpdate from 'hooks/useDidUpdate'
import { request } from 'request/request'
import { StyledTableAuction, StyledTableHeader } from '.'
import { LocationIcon, NearMeIcon } from '../../../icons/form'
import SelectMenu from '../select/SelectMenu'
import { useTranslation } from '../../../i18n'

export default function TableAuction({
    setTableData,
    formatTableData,
    setCount,
    setIsLoading,
    setPage,
    page,
    isLoading,
    tableData,
}) {
    const [values, setValues] = useState({
        city: null,
        region: null,
    })
    const [options, setOptions] = useState({
        region: [],
        city: [],
    })
    const { t } = useTranslation()

    const getAllStatuses = () => {
        request
            .get(`/status`)
            .then(({ data }) => {
                setOptions((opts) => ({ ...opts, status: data }))
            })
            .catch((err) => console.log(err))
    }

    const filterApplications = (resetPage) => {
        setIsLoading(true)
        request
            .get(`/auction`)
            .then(({ data }) => {
                setTableData(formatTableData(data))
                setCount(parseInt(data?.count) || 0)
                if (resetPage && parseInt(page) !== 1) {
                    setPage(1)
                }
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setIsLoading(false)
            })
    }

    useEffect(() => {
        if (values.city?.id) {
            request
                .get(`/regions/${values.city?.id}`)
                .then(({ data }) => {
                    setOptions({ ...options, region: data?.regions || [] })
                })
                .catch((err) => console.log(err))
        }
    }, [values?.city])
    useDidUpdate(() => {
        filterApplications(true)
    }, [values])
    useDidUpdate(() => {
        filterApplications()
    }, [page])
    useEffect(() => {
        request
            .get(`/city`)
            .then(({ data }) => {
                setOptions((opts) => ({ ...opts, city: data?.cities }))
                getAllStatuses()
            })
            .catch((err) => console.log(err))
    }, [])
    useDidUpdate(() => {
        setValues({
            ...values,
            region: null,
        })
    }, [values?.city?.id])
    return null
}
