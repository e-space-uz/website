import { Grid } from '@material-ui/core'
import Login from 'components/auth/Login'
import OneIdBanner from 'components/auth/OneIdBanner'
import React from 'react'

function login() {
    return (
        <Grid container>
            <Grid item xs={5}>
                <OneIdBanner />
            </Grid>
            <Grid item xs={7}>
                <Login />
            </Grid>
        </Grid>
    )
}

export default login
