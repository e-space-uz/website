import { DataRow } from 'components/application'
import { Title } from 'components/common'
import { Box, Container } from 'components/layout'
import SEO from 'components/SEO'
import { parseCookies } from 'nookies'
import React from 'react'
import { fetchMultipleRequest } from 'utils/fetchMultipleRequest'
import { useTranslation } from '../i18n'

function profile({ userData }) {
    const { t } = useTranslation()
    const tempData = [
        { label: 'PIN', accessor: 'pin' },
        { label: 'TIN', accessor: 'inn' },
        { label: t('passportNum'), accessor: 'passport_number' },
        { label: t('profileName'), accessor: 'first_name' },
        { label: t('profileSurname'), accessor: 'last_name' },
        { label: t('profileMiddlename'), accessor: 'middle_name' },
        { label: t('fullName'), accessor: 'full_name' },
        { label: t('citizenship'), accessor: 'citizenship' },
        { label: t('nationality'), accessor: 'nationality' },
        { label: t('login'), accessor: 'login' },
        { label: t('email'), accessor: 'email' },
        { label: t('phoneNum'), accessor: 'phone_number' },
        { label: t('birthday'), accessor: 'birth_date' },
        { label: t('birthPlace'), accessor: 'birth_place' },
        {
            label: t('permamaentAdres'),
            accessor: 'permanent_address',
        },
    ]

    console.log(userData)
    return (
        <>
            <SEO />
            <Container centeredContent>
                <Title section>{t('myDate')}</Title>
                <Box
                    width="calc(100% - 32px)"
                    maxWidth={768}
                    br={12}
                    p={4}
                    mb={4}
                    mx={2}
                >
                    {tempData?.map((row) => (
                        <DataRow key={row.accessor}>
                            <p>{row.label}</p>
                            <span
                                style={{
                                    wordBreak:
                                        userData?.[row.accessor]?.split(' ')
                                            ?.length === 1
                                            ? 'break-all'
                                            : 'normal',
                                }}
                            >
                                {userData?.[row.accessor] || row?.value || '―'}
                            </span>
                        </DataRow>
                    ))}
                </Box>
            </Container>
        </>
    )
}
export const getServerSideProps = async (ctx) => {
    const { access_token } = parseCookies(ctx)

    if (!access_token) {
        return {
            redirect: {
                destination: '/',
            },
        }
    }

    const [userData] = await fetchMultipleRequest([
        {
            endpoint: `${process.env.BASE_URL}/applicant-by-token`,
            token: access_token,
            headers: {
                Authorization: access_token,
            },
        },
    ])
    return {
        props: {
            userData,
        },
    }
}

export default profile
