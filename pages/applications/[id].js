import { Grid } from '@material-ui/core'
import ApplicationTab from 'components/application/ApplicationTab'
import Button from 'components/form/button/Button'
import { useIsMobile } from 'hooks/useIsMobile'
import { DownloadIcon } from 'icons'
import React from 'react'
import { deviceSizes } from 'theme/breakpoint'
import { fetchMultipleRequest } from 'utils/fetchMultipleRequest'
import ApplicationDetails from '../../components/application/ApplicationDetailsContainer'
import { Box, Wrapper } from '../../components/layout'
import SEO from '../../components/SEO'
import PeriodLine from '../../components/timeline/PeriodLine'

function applicationSingle({ application, periodline }) {
    const isMobile = useIsMobile(deviceSizes.tabletM)
    return (
        <>
            <SEO />
            <Box background="#f5f5f5" px={2}>
                <Wrapper background="#fff" br={12}>
                    {!isMobile ? (
                        <Box
                            mt={2}
                            display="flex"
                            justifyContent="flex-end"
                            flexWrap="wrap"
                            alignItems="center"
                            pt={2}
                        >
                            <Box width="auto" mr={1} pb={1}>
                                <Button
                                    adornment={
                                        <DownloadIcon fill="var(--main)" />
                                    }
                                >
                                    Заявление PDF
                                </Button>
                            </Box>
                            <Box width="auto" pb={1}>
                                <Button
                                    primary
                                    adornment={<DownloadIcon fill="white" />}
                                >
                                    Кординаты JSON
                                </Button>
                            </Box>
                        </Box>
                    ) : (
                        ''
                    )}
                    <Box py={2} my={2}>
                        {!isMobile ? (
                            <Grid container spacing={4} mt={4}>
                                <Grid item xs={12} md={7}>
                                    <ApplicationDetails data={application} />
                                </Grid>
                                <Grid item xs={12} md={5}>
                                    <PeriodLine data={periodline} />
                                </Grid>
                            </Grid>
                        ) : (
                            <ApplicationTab
                                tabNames={['Ma`lumotlar', 'Harakatlar tarixi']}
                                tabComponents={[
                                    <ApplicationDetails />,
                                    <PeriodLine />,
                                ]}
                            />
                        )}
                    </Box>
                </Wrapper>
                {isMobile ? (
                    <Box
                        background="transparent"
                        my={2}
                        display="flex"
                        justifyContent="flex-end"
                        flexWrap="wrap"
                        alignItems="center"
                    >
                        <Box width="auto" mr={1}>
                            <Button
                                adornment={<DownloadIcon fill="var(--main)" />}
                            >
                                PDF
                            </Button>
                        </Box>
                        <Box width="auto" transparent>
                            <Button
                                adornment={<DownloadIcon fill="var(--main)" />}
                            >
                                JSON
                            </Button>
                        </Box>
                    </Box>
                ) : (
                    ''
                )}
            </Box>
        </>
    )
}

export default applicationSingle

export async function getServerSideProps({ params }) {
    const requests = [
        `${process.env.BASE_URL}/entity/${params.id}`,
        `${process.env.BASE_URL}/action-history-entity/${params.id}`,
    ]
    const [application, periodline] = await fetchMultipleRequest(requests)
    return {
        props: {
            application,
            periodline,
        },
    }
}
