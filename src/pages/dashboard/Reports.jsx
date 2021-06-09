import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4)
    }
}))

const Reports = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <h1>Reports</h1>
        </div>
    )
}

export default Reports
