import React from 'react'
import { Link } from 'react-router-dom'
import palette from '../../../../theme/palette'
import { makeStyles } from '@material-ui/core';
import { AppBar, Toolbar } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: 'none',
        backgroundColor: palette.primary.dark,
    },
    flexGrow: {
        flexGrow: 1,
    },
    link: {
        'font-family': 'Roboto',
        display: 'flex',
        alignItems: 'center',
        padding: '10px 15px',
        textDecoration: 'none',
        userSelect: 'none',
        color: palette.text.link,
        borderRadius: '5px',
        transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        '&:hover': {
            textDecoration: 'none',
            color: palette.text.link,
            backgroundColor: 'rgba(213,213,226,.1)',
        },
    },
    signOutButton: {
        marginLeft: theme.spacing(1),
    },
}))

const Navbar = () => {
    const classes = useStyles()

    return (
        <AppBar className={classes.root}>
            <Toolbar>
                <Link to="/app" className={classes.link}>
                    <h2>Remorapy</h2>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
