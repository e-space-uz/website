import { parseCookies } from 'nookies'

const handleLoginRedirect = (callback) => {
    const { access_token } = parseCookies()
    if (!access_token) {
        const backUrl = {
            development: 'http://localhost:3000/',
            production: 'https://test.espace.uz/',
            // production: 'https://api.e-space.javelin.uz/',
        }[process.env.NODE_ENV]
        const redirectUrl = `https://sso2.egov.uz:8443/sso/oauth/Authorization.do?response_type=one_code&client_id=espace&redirect_uri=${backUrl}&Scope=espace&state=IDPW`
        window.location.replace(redirectUrl)
    } else if (callback) {
        callback()
    }
}
export default handleLoginRedirect
