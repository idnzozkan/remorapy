import React from 'react'
import { makeStyles, Card, Avatar, Typography, Box, Divider, Chip } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '30rem',
        padding: 0,
        borderRadius: 15
    },
    avatar: {
        width: '100%',
        height: '15rem'
    }
}))

const TherapistCard = () => {
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <Link to="#">
                <Avatar variant="square" className={classes.avatar} />
            </Link>
            <Box display="flex" flexDirection="column">
                <Typography variant="h3">John Doe</Typography>
                <Typography variant="p">Counselling Psychologist</Typography>
                <Typography variant="span">2 years of experience</Typography>
            </Box>
            <Chip label="Anxiety" />
            <Chip label="Stress" />
            <Chip label="Depression" />
            <Chip label="Anger Management" />
            <Divider />
        </Card >
    )
}

export default TherapistCard
