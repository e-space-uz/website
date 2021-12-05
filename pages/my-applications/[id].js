import ApplicationSingleContainer from 'components/application/ApplicationSingleContainer'
import EntityApplication from 'components/application/EntityApplication'
import { Title } from 'components/common'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import React, { useState, useEffect } from 'react'
import { fetchMultipleRequest } from 'utils/fetchMultipleRequest'
import { Box, Container, Wrapper } from '../../components/layout'
import SEO from '../../components/SEO'
import { useTranslation } from '../../i18n'

function myApplicationSingle({ application, periodLine }) {
    console.log('application 1', application)
    console.log('periodLine', periodLine)
    const [data, setData] = useState(application)
    const router = useRouter()
    const {
        query: { entity, draft_id },
    } = router

    console.log('arizam', data)
    useEffect(() => {
        if (draft_id) {
            const entity_draft = application?.entity_drafts?.find(
                (item) => item.id === draft_id,
            )
            setData(entity_draft)
        }
    }, [draft_id])

    console.log('draft', draft_id)
    const { t } = useTranslation()
    return (
        <>
            <SEO />
            <Container>
                <Title section>
                    {t('myOffers_2')}{' '}
                    {application.entity_number
                        ? application.entity_number
                        : application.entity_draft_number}
                </Title>
                <Wrapper background="#fff" br={12}>
                    <Box py={4} my={2}>
                        {entity === 'true' && (
                            <EntityApplication
                                application={application}
                                periodLine={periodLine}
                            />
                        )}
                        <ApplicationSingleContainer data={data} />
                    </Box>
                </Wrapper>
            </Container>
        </>
    )
}
export async function getServerSideProps(ctx) {
    const { params, query } = ctx
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
            endpoint: `${process.env.BASE_URL}/${
                query.entity === 'true' ? 'entity' : 'entity-draft'
            }/${params.id}`,
            headers: {
                Authorization: access_token,
            },
        },
        {
            endpoint: `${process.env.BASE_URL}/action-history-entity/${params.id}`,
            headers: {
                Authorization: access_token,
            },
        },
    ]
    const [application, periodLine] = await fetchMultipleRequest(requests)
    return {
        props: {
            application,
            periodLine,
        },
    }
}
export default myApplicationSingle
