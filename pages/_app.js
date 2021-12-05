import { useEffect } from 'react'
import '../styles/globals.css'
import NProgress from 'nprogress'
import Router from 'next/router'
import Layout from 'components/layout/Layout'
import { parseCookies, setCookie } from 'nookies'
import { request } from 'request/request'
import Providers from 'components/layout/Providers'
import { appWithTranslation } from '../i18n'
import '../styles/style.scss'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => {
    NProgress.done()
})
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
    const { access_token, refresh_token } = parseCookies()

    useEffect(() => {
        if (!access_token && refresh_token) {
            request
                .post(
                    `/login-refresh?refresh_token=${refresh_token}&is_applicant=true`,
                )
                .then(({ data }) => {
                    setCookie(null, 'access_token', data.access_token, {
                        maxAge: 60 * 60 * 24 * 2,
                        path: '/',
                    })
                    setCookie(null, 'refresh_token', data.refresh_token, {
                        maxAge: 60 * 60 * 24 * 7,
                        path: '/',
                    })
                })
                .catch((err) => console.log('err => ', err))
        }
    }, [])

    return (
        <>
            <Providers pageProps={pageProps}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Providers>
        </>
    )
}

export default appWithTranslation(MyApp)
