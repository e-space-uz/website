import { Title } from 'components/common'
import MapPage from 'components/form/map/MapPage'
import { Wrapper } from 'components/layout'
import { useTranslation } from 'i18n'

export default function PageMap() {
    const { t } = useTranslation()

    return (
        <>
            <div style={{ background: '#fff' }}>
                <Wrapper style={{ margin: '56px auto 56px' }}>
                    <Title
                        section
                        style={{
                            textAlign: 'left',
                            margin: '0',
                            marginBottom: '24px',
                        }}
                    >
                        {t('pageOpenMap')}
                    </Title>
                    <div
                        style={{
                            background: '#EBF7FF',
                            padding: '24px',
                            borderRadius: '12px',
                        }}
                    >
                        <MapPage />
                    </div>
                </Wrapper>
            </div>
        </>
    )
}
