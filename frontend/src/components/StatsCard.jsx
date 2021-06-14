import React from 'react'
import clsx from 'clsx'
import palette from '../theme/palette'
import { makeStyles } from '@material-ui/styles'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 250,
        width: '100%',
        padding: '1rem 0',

        '& svg': {
            fontSize: '3.5rem'
        },

        '& p': {
            fontSize: '1rem'
        },

        '& h3': {
            fontSize: '1.5rem',
            fontWeight: 'bold'
        },
    },

    primaryIcon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: 60,
        height: 60,
        background: palette.primary.action,
        color: palette.primary.main,
    },

    secondaryIcon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: 60,
        height: 60,
        background: palette.secondary.lighten,
        color: palette.secondary.main
    },

    successIcon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: 60,
        height: 60,
        background: palette.success.lighten,
        color: palette.success.dark
    },


}))

const StatsCard = ({ icon, label, value, color }) => {
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <div className={clsx(color == 'primary' ? classes.primaryIcon : '', color == 'secondary' ? classes.secondaryIcon : '', color == 'success' ? classes.successIcon : '',)}>
                {icon}
            </div>
            <Typography>{label}</Typography>
            <Typography component="h3">{value}</Typography>
        </Card>
    )
}

export default StatsCard
