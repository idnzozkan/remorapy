import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core'
import { Navbar, Sidebar } from './components'

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: 56,
        height: '100%',
        [theme.breakpoints.up('sm')]: {
            paddingTop: 64,
        },
    },
    shiftContent: {
        paddingLeft: 240,
    },
    content: {
        height: '100%',
        minHeight: 'calc(100vh - 64px)',
    },
}))

const DashboardLayout = ({ children }) => {
    const classes = useStyles()

    return (
        <div className={clsx(classes.root, classes.shiftContent)}>
            <Navbar />
            <Sidebar />
            <main className={classes.content}>{children}</main>
        </div>
    )
}

export default DashboardLayout
