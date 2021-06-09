import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4)
    }
}))

const Appointments = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <h1>Appointments</h1>
        </div>
    )
}

export default Appointments
