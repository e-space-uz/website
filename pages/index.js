import Auction from 'components/auction/auction'
import HeaderInfo from 'components/headerInfo/headerInfo'
import InformationSection from 'components/information/InformationSection'
import PageMap from 'components/map/page-map'
import SEO from 'components/SEO'
import { setCookie } from 'nookies'
import { fetchMultipleRequest } from 'utils/fetchMultipleRequest'

export default function Home({ applications, apply, statistics, news }) {
    return (
        <>
            <SEO />
            <HeaderInfo />
            <Auction apply={apply} />
            <InformationSection />
            <PageMap />
        </>
    )
}
export const getServerSideProps = async (ctx) => {
    const { query, req } = ctx
    if (query.code) {
        const requests = [
            `${process.env.BASE_URL}/applicant/one-id/${query.code}`,
        ]
        const [data] = await fetchMultipleRequest(requests)
        setCookie(ctx, 'access_token', data?.access_token, {
            path: '/',
            maxAge: 60 * 60 * 24 * 2,
        })
        setCookie(ctx, 'refresh_token', data?.refresh_token, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7,
        })
        const [userData] = await fetchMultipleRequest([
            {
                endpoint: `${process.env.BASE_URL}/applicant-by-token`,
                headers: {
                    Authorization: data?.access_token,
                },
            },
        ])
        setCookie(
            ctx,
            'initials',
            `${userData?.first_name?.charAt(0) || ''}${
                userData?.last_name?.charAt(0) || ''
            }`,
            {
                path: '/',
                maxAge: 60 * 60 * 24 * 30,
            },
        )
        return {
            redirect: {
                destination: '/',
                permanent: true,
            },
        }
    }
    const requests = [
        `${process.env.BASE_URL}/entity?limit=5`,
        `${process.env.BASE_URL}/auction`,
        `${process.env.BASE_URL}/entity-count`,
        `${process.env.BASE_URL}/news?lang=${req.i18n.language}&limit=3`,
    ]
    const [applications, apply, statistics, news] = await fetchMultipleRequest(
        requests,
    )
    return {
        props: {
            applications,
            apply,
            statistics,
            news,
        },
    }
}
