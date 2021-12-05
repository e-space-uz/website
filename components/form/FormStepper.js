import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepConnector from '@material-ui/core/StepConnector'
import { DocumentFilledIcon, GrassFilledIcon, TickFilledIcon } from 'icons/form'
import { breakpoints } from 'theme/breakpoint'

const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 22,
    },
    active: {
        '& $line': {
            background: '#0E73F6',
        },
    },
    completed: {
        '& $line': {
            background: '#0E73F6',
        },
    },
    line: {
        height: 3,
        border: 0,
        margin: '0 4px',
        background: '#eaeaf0',
        borderRadius: 1,
    },
})(StepConnector)

const useColorlibStepIconStyles = makeStyles({
    root: {
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundImage: '#0E73F6',
        '& svg rect': {
            fill: '#0E73F6',
            fillOpacity: 1,
        },
        '& svg path': {
            fill: '#fff',
        },
    },
    completed: {
        backgroundImage: '#0E73F6',
        '& svg rect': {
            fill: '#0E73F6',
            fillOpacity: 1,
        },
        '& svg path': {
            fill: '#fff',
        },
    },
})

function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles()
    const { active, completed, icon } = props

    const icons = {
        1: <DocumentFilledIcon />,
        2: <GrassFilledIcon />,
        3: <TickFilledIcon />,
    }

    return (
        <div
            className={`${classes.root} ${active && classes.active} ${
                completed && classes.completed
            } `}
        >
            {icons[String(icon)]}
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'none',
        [`@media ${breakpoints.ml}`]: {
            display: 'block',
        },
        '& .MuiStepper-root': {
            padding: 0,
        },
        '& .MuiStepper-root .MuiStep-root': {
            padding: 0,
        },
        // '& .MuiStepper-root .MuiStep-root:nth-child(1)': {
        //     justifyContent: 'flex-start',
        // },
        // '& .MuiStepper-root .MuiStep-root:nth-child(2)': {
        //     justifyContent: 'center',
        // },
        // '& .MuiStepper-root .MuiStep-root:nth-child(3)': {
        //     justifyContent: 'flex-end',
        // },
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}))

function getSteps() {
    return ['Select campaign settings', 'Create an ad group', 'Create an ad']
}

export default function FormStepper({ activeStep }) {
    const classes = useStyles()
    const steps = getSteps()

    return (
        <div className={classes.root}>
            <Stepper
                alternativeLabel
                activeStep={activeStep}
                connector={<ColorlibConnector />}
            >
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={ColorlibStepIcon} />
                    </Step>
                ))}
            </Stepper>
        </div>
    )
}
