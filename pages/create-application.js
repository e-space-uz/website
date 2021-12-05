import { Box } from '@material-ui/core'
import { Title } from 'components/common'
import FormTabPanel from 'components/form/FormTabPanel'
import responseFormatter from 'components/form/map/responseFormatter'
import SEO from 'components/SEO'
import { parseCookies } from 'nookies'
import { fetchMultipleRequest } from 'utils/fetchMultipleRequest'
import { useTranslation } from '../i18n'

export default function applicationPage(props) {
    const { formFields, user, entity, constructionTypes } = props
    const { t } = useTranslation()
    return (
        <>
            <SEO />
            <Box style={{ background: '#f4f6f7' }}>
                <Title section>{t('creatAppTitle')}</Title>
                <FormTabPanel
                    firstFormFields={formFields}
                    user={user}
                    initialData={entity}
                    constructionTypes={constructionTypes?.construction_types}
                />
            </Box>
        </>
    )
}
export async function getServerSideProps(ctx) {
    const { access_token } = parseCookies(ctx)
    const { entity_id } = ctx.query
    const requests = [
        {
            endpoint: `${process.env.BASE_URL}/applicant-by-token`,
            headers: {
                Authorization: access_token,
            },
        },
    ]
    if (entity_id) {
        requests.push({
            endpoint: `${process.env.BASE_URL}/entity/${entity_id}`,
        })
    }
    const urls = [
        `${process.env.BASE_URL}/group-property-type?step=1&type=4`,
        `https://api.admin.api.e-space.javelin.uz/v1/construction-type`,
    ]
    const [formFields = null, constructionTypes] = await fetchMultipleRequest(
        urls,
    )
    const [user, entity] = await fetchMultipleRequest(requests)
    const initialProperties = entity?.entity_properties?.reduce(
        (obj, item) => Object.assign(obj, { [item.property.id]: item.value }),
        {},
    )
    let map
    if (entity_id) {
        map = responseFormatter([entity], 'entity_single')
    }

    const entityProperties = {
        ...entity,
        ...initialProperties,
        map,
        [process.env.MAP_PROPERTY_ID]: map,
    }

    return {
        props: {
            formFields,
            user,
            entity: entity ? entityProperties : null,
            constructionTypes,
        },
    }
}
