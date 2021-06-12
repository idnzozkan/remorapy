import { Grid, makeStyles, Paper } from '@material-ui/core'
import React from 'react'

import WelcomeCard from '../../components/WelcomeCard'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(5)
    },
    paddingTop: {
        paddingTop: theme.spacing(4),
    }
}))

const data = {
    patient: {
        name: 'John Doe',
        userType: 'patient',
        appointments: [
            {
                id: 1,
                date: 'June 12 2021',
                time: '9:30 AM',
                therapist: { name: 'Mikasa Ackerman' },
                patient: { name: 'John Doe' },
                duration: 30,
                status: 'pending'
            },
            {
                id: 2,
                date: 'June 5 2021',
                time: '4:00 PM',
                therapist: { name: 'Levi Ackerman' },
                patient: { name: 'John Doe' },
                duration: 60,
                status: 'completed'
            },
            {
                id: 3,
                date: 'May 4 2021',
                time: '3:00 PM',
                therapist: { name: 'Mikasa Ackerman' },
                patient: { name: 'John Doe' },
                duration: 30,
                status: 'completed'
            },
        ]
    }
}

const Home = () => {
    const classes = useStyles()

    const getFavTherapist = (patient) => {
        const appointmentCounts = patient.appointments.reduce((acc, item) => {
            let name = item.therapist.name

            if (name in acc) {
                acc[name]++
            } else {
                acc[name] = 1
            }

            return acc
        }, {})

        let counts = Object.values(appointmentCounts)
        let max = Math.max.apply(Math, counts)

        for (let therapistName in appointmentCounts) {
            if (appointmentCounts[therapistName] === max) {
                let favTherapist = patient.appointments.find(appointment => appointment.therapist.name == therapistName).therapist

                return favTherapist
            }
        }
    }

    const getTotalSessions = (patient) => {
        return patient.appointments.filter(appointment => appointment.status == 'completed').length
    }

    const getTotalHours = (patient) => {
        let totalMins = patient.appointments.reduce((acc, appointment) => {
            if (appointment.status == 'completed') {
                acc += appointment.duration
            }
            return acc
        }, 0)
        console.log(totalMins)
        return (totalMins / 60).toFixed(2)
    }

    const favTherapist = getFavTherapist(data.patient)
    const totalSessions = getTotalSessions(data.patient)
    const totalHours = getTotalHours(data.patient)

    return (
        <div className={classes.root}>
            <Grid container spacing={5} className={classes.paddingTop}>
                <Grid item lg={7}>
                    <Grid item lg={8}>
                        <WelcomeCard name={data.patient.name} userType={data.patient.userType} />
                    </Grid>

                    <Grid container spacing={8} className={classes.paddingTop}>
                        <Grid item lg={4}>
                            <Paper style={{ minHeight: 150 }}>Total Sessions: {totalSessions}</Paper>
                        </Grid>
                        <Grid item lg={4}>
                            <Paper style={{ minHeight: 150 }}>Total Hours: {totalHours} h</Paper>
                        </Grid>
                        <Grid item lg={4}>
                            <Paper style={{ minHeight: 150 }}>Your Favourite Therapist: {favTherapist.name}</Paper>
                        </Grid>
                    </Grid>

                    <Grid container className={classes.paddingTop}>
                        <Grid item lg={12}>
                            <Paper style={{ minHeight: 350 }}>upcoming appointments</Paper>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item lg={5}>
                    <Paper style={{ minHeight: 500 }}>calendar</Paper>

                    <Grid container className={classes.paddingTop}>
                        <Grid item lg={12}>
                            <Paper style={{ minHeight: 250 }}>reports</Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home
