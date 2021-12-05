import React from 'react'
import Button from 'components/form/button/Button'
import { CloseIconSmall } from 'icons/map'
import { Popup } from 'react-map-gl'
import { parseCookies } from 'nookies'
import { useRouter } from 'next/router'
import { useTranslation } from 'i18n'
import handleLoginRedirect from 'utils/handleLoginRedirect'
import { ToolTipContainer, ToolTipRow } from '..'

const rowData = [
    {
        label: 'Ҳолати',
        accessor: 'status',
    },
    {
        label: 'Таклифлар сони',
        accessor: 'application_quantity',
    },
    {
        label: 'Вилоят',
        accessor: 'city',
    },
    {
        label: 'Туман',
        accessor: 'region',
    },
    {
        label: 'Маҳалла',
        accessor: 'district',
    },
    {
        label: 'Майдон (Га)',
        accessor: 'area',
    },
]
function ToolTip({ data, closeToolTip }) {
    const router = useRouter()
    const { access_token } = parseCookies()
    const { t } = useTranslation()

    return (
        <>
            {data?.show ? (
                <Popup
                    className="mapbox_popup_47"
                    longitude={data.properties.long}
                    latitude={data.properties.lat}
                    anchor="bottom"
                    closeOnClick
                    captureScroll
                >
                    <ToolTipContainer
                        longitude={data.properties.long}
                        latitude={data.properties.lat}
                        anchor="bottom"
                        captureScroll
                        offsetY={data?.offsetY}
                        offsetX={data?.offsetX}
                    >
                        <header>
                            <h3>
                                {t('offerNum_2')}
                                {data?.properties?.entity_number}
                            </h3>
                            <button type="button" onClick={closeToolTip}>
                                <CloseIconSmall />
                            </button>
                        </header>
                        {data?.properties?.image ? (
                            <div>
                                <img
                                    src={data?.properties?.image}
                                    alt={data?.properties?.name}
                                />
                            </div>
                        ) : (
                            ''
                        )}
                        <main>
                            {rowData.map((row, index) => (
                                <ToolTipRow
                                    key={row.label}
                                    even={index % 2 === 1}
                                >
                                    <span>{row.label}</span>
                                    <span>
                                        {data?.properties?.[row.accessor] ||
                                            '—'}
                                    </span>
                                </ToolTipRow>
                            ))}
                            <Button
                                fullWidth
                                primary
                                onClick={() =>
                                    router.push({
                                        pathname: access_token
                                            ? '/create-application'
                                            : handleLoginRedirect(),
                                        query: {
                                            entity_id: data.properties.id,
                                        },
                                    })
                                }
                            >
                                {t('putOffer')}
                            </Button>
                        </main>
                    </ToolTipContainer>
                </Popup>
            ) : (
                ''
            )}
        </>
    )
}

export default ToolTip
