import React from 'react'
import { SectionTitle } from '../common'
import { FormSectionContainer, Grid } from '.'

function FormSection({ title, children, center, columns = 2 }) {
    return (
        <FormSectionContainer>
            {title && title !== 'empty' && <SectionTitle>{title}</SectionTitle>}
            <Grid type={center ? 1 : columns} spacing={4}>
                {children}
            </Grid>
        </FormSectionContainer>
    )
}

export default FormSection
