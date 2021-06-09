import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4)
    }
}))

const Settings = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <h1>Settings</h1>
        </div>
    )
}

export default Settings
