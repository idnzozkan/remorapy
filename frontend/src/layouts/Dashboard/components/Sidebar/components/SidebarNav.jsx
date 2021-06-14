import React, { forwardRef } from 'react'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import { Button, List, ListItem, makeStyles } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import ListIcon from '@material-ui/icons/List'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'
import AssignmentIcon from '@material-ui/icons/Assignment'
import SettingsIcon from '@material-ui/icons/Settings'

const useStyles = makeStyles((theme) => ({
    root: {},
    item: {
        display: 'flex',
        paddingTop: 0,
        paddingBottom: 0,
    },
    button: {
        color: '#A1A1B5',
        padding: '10px 8px',
        justifyContent: 'flex-start',
        textTransform: 'none',
        letterSpacing: 0,
        width: '100%',
        fontSize: 14,
        fontWeight: 500,
        '&:hover': {
            color: theme.palette.primary.main,
        },
    },
    icon: {
        color: theme.palette.icon,
        width: 24,
        height: 24,
        display: 'flex',
        alignItems: 'center',
        marginRight: theme.spacing(1),
    },
    active: {
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightMedium,
        '& $icon': {
            color: theme.palette.primary.main,
        },
    },
    noTextDecoration: {
        textDecoration: 'none'
    }
}))

const pages = [
    {
        title: 'Home',
        path: '/app',
        icon: <HomeIcon />
    },
    {
        title: 'Find Therapist',
        path: '/app/find-therapist',
        icon: <SearchIcon />
    },
    {
        title: 'Appointments',
        path: '/app/appointments',
        icon: <ListIcon />
    },
    {
        title: 'Messages',
        path: '/app/messages',
        icon: <QuestionAnswerIcon />
    },
    {
        title: 'Reports',
        path: '/app/reports',
        icon: <AssignmentIcon />
    },
    {
        title: 'Settings',
        path: '/app/settings',
        icon: <SettingsIcon />
    },
]

const CustomNavLink = forwardRef((props, ref) => (
    <div ref={ref} style={{ flexGrow: 1 }}>
        <NavLink {...props} />
    </div>
))

const SidebarNav = (props) => {
    const { className, ...rest } = props
    const classes = useStyles()

    return (
        <List className={clsx(classes.root, className)}>
            {pages.map(page => (
                <ListItem className={classes.item} key={page.title} disableGutters>
                    <Button
                        className={classes.button}
                        exact
                        to={page.path}
                        activeClassName={classes.active}
                        component={CustomNavLink}
                    >
                        <div className={classes.icon}>{page.icon}</div>
                        {page.title}
                    </Button>
                </ListItem>
            ))}
        </List>
    )
}

export default SidebarNav
