import React from 'react'
import { Card, CardContent, makeStyles } from '@material-ui/core'
import oldManImg from '../images/old-man.png'
import therapistImg from '../images/therapist.png'

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        width: '100%',
    },
    card: {
        width: '100%',
    },
    image: {
        position: 'absolute',
        bottom: 0,
        right: -30,
        width: 350,
        overflow: 'hidden'
    },
    content: {
        display: 'flex',
        flexDirection: 'column'
    }
}))

const WelcomeCard = (props) => {
    const { name, userType } = props
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardContent className={classes.content}>
                    <h1>Welcome {name}!</h1>
                    <span>Have a nice day</span>
                </CardContent>
            </Card>
            <img className={classes.image} src={userType === 'therapist' ? therapistImg : oldManImg} alt="Welcomer" />
        </div>
    )
}

export default WelcomeCard
