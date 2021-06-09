import { makeStyles } from '@material-ui/core'
import React from 'react'

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
        </div>
    )
}

export default FindTherapist
