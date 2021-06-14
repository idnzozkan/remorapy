import React from 'react'
import clsx from 'clsx'
import { Drawer, makeStyles } from '@material-ui/core'
import SidebarNav from './components/SidebarNav';

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: 240,
        [theme.breakpoints.up('lg')]: {
            marginTop: 64,
            height: 'calc(100% - 64px)',
        },
    },
    root: {
        backgroundColor: theme.palette.white,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: theme.spacing(4),
    },
    divider: {
        margin: theme.spacing(4, 0, 1),
    },
    nav: {
        marginBottom: theme.spacing(2),
    },
}))

const Sidebar = (props) => {
    const { className, ...rest } = props
    const classes = useStyles()

    return (
        <Drawer anchor='left' variant="permanent" classes={{ paper: classes.drawer }}>
            <div className={clsx(classes.root, className)}>
                <SidebarNav className={classes.nav} />
            </div>
        </Drawer>
    )
}

export default Sidebar