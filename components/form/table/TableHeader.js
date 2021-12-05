import { Box } from '@material-ui/core'
import axios from 'axios'
import { useState, useEffect } from 'react'
import useDidUpdate from 'hooks/useDidUpdate'
import Icon from 'icons/Icon'
import { format } from 'almoment'
import { request } from 'request/request'
import moment from 'moment'
import { StyledTableHeader } from '.'
import { DownloadIcon } from '../../../icons'
import { LocationIcon, NearMeIcon, SearchIcon } from '../../../icons/form'
import Button from '../button/Button'
import SelectMenu from '../select/SelectMenu'
import TextInput from '../input/TextInput'
import DateInput from '../input/DateInput'
import StatusMenu from '../select/StatusMenu'
import { useTranslation } from '../../../i18n'

export default function TableHeader({
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
        status: null,
        from_date: null,
        to_date: null,
        entity_number: '',
    })
    const [options, setOptions] = useState({
        region: [],
        city: [],
        status: [],
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

    const getExcel = () => {
        if ((values?.from_date, values?.to_date)) {
            setIsLoading(true)
            axios
                .get(
                    `https://api.admin.api.e-space.javelin.uz/v1/entity-excel-report?from_date=${moment(
                        values.from_date,
                    ).format('YYYY-MM-DD')}&to_date=${moment(
                        values.to_date,
                    ).format('YYYY-MM-DD')}`,
                )
                .then(({ data }) => {
                    // console.log(data)
                    const link = document.createElement('a')
                    link.href = data.file
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                })
                .catch((err) => console.log(err))
                .finally(() => {
                    setIsLoading(false)
                })
        }
    }
    const filterApplications = (resetPage) => {
        const cityQuery = values.city?.id ? `&city_id=${values.city?.id}` : ''
        const regionQuery = values.region?.id
            ? `&region_id=${values.region?.id}`
            : ''
        const statusQuery = values.status?.length
            ? `&status_id=${values.status?.[0].id}`
            : ''
        const fromDateQuery = values.from_date
            ? `&from_date=${format(values.from_date, 'YYYY-MM-DD')}`
            : ''
        const toDateQuery = values.to_date
            ? `&to_date=${format(values.to_date, 'YYYY-MM-DD')}`
            : ''
        const numberQuery = values.entity_number?.length
            ? `&entity_number=${values.entity_number}`
            : ''
        setIsLoading(true)
        request
            .get(
                `/entity?limit=5${cityQuery}${regionQuery}${statusQuery}${fromDateQuery}${toDateQuery}${numberQuery}&page=${
                    resetPage ? 1 : page || 1
                }`,
            )
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
    return (
        <StyledTableHeader>
            <Box width="65%" className="header_table">
                <SelectMenu
                    isStatic
                    clearable
                    onChange={(value) => setValues({ ...values, city: value })}
                    value={values?.city}
                    options={options.city}
                    adornment={<LocationIcon />}
                    placeholder={t('village')}
                    resetValue={() => setValues({ ...values, city: null })}
                />
                <SelectMenu
                    isStatic
                    clearable
                    onChange={(value) =>
                        setValues({ ...values, region: value })
                    }
                    value={values?.region}
                    options={options.region}
                    adornment={<NearMeIcon fill="#7d7d7d" />}
                    placeholder={t('district')}
                    resetValue={() => setValues({ ...values, region: null })}
                />
                <DateInput
                    clearable
                    adornment={<Icon name="clock-icon" />}
                    placeholder={t('before')}
                    onChange={(value) =>
                        setValues({ ...values, from_date: value })
                    }
                    value={values.from_date}
                    resetValue={() => setValues({ ...values, from_date: null })}
                />
                <DateInput
                    clearable
                    adornment={<Icon name="clock-icon" />}
                    placeholder={t('after')}
                    onChange={(value) =>
                        setValues({ ...values, to_date: value })
                    }
                    value={values.to_date}
                    resetValue={() => setValues({ ...values, to_date: null })}
                />
                <StatusMenu
                    options={options.status}
                    onChange={(value) =>
                        setValues({ ...values, status: value })
                    }
                    value={values.status}
                />
            </Box>
            <Box ml={1}>
                <TextInput
                    onChange={(e) =>
                        setValues({ ...values, entity_number: e.target.value })
                    }
                    value={values?.entity_number}
                    placeholder={t('offerKadastrNum')}
                    adornment={<SearchIcon fill="#7d7d7d" />}
                    boxStyles={{ width: 250 }}
                />
                <Button
                    minWidth={100}
                    background="#47d16c"
                    noBorder
                    color="#fff"
                    onClick={getExcel}
                    isLoading={isLoading}
                    isDisable={Boolean(
                        values.from_date && values.to_date && tableData?.length,
                    )}
                >
                    <DownloadIcon />
                    <span style={{ marginLeft: 12 }}>Excel</span>
                </Button>
            </Box>
        </StyledTableHeader>
    )
}
