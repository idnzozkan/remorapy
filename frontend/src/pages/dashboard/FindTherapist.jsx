import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'

import TherapistCard from '../../components/TherapistCard'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4)
    }
}))

const FindTherapist = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <h1>Find Therapist</h1>
            <Grid container spacing="4">
                {[0, 1, 2, 3, 4].map(therapist => (
                    <Grid item md="3" key={therapist} >
                        <TherapistCard />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default FindTherapist
