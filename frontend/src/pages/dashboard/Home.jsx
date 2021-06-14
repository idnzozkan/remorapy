import { Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'

import WelcomeCard from '../../components/WelcomeCard'
import UpcomingAppointments from '../../components/UpcomingAppointments'
import StatsCard from '../../components/StatsCard'

import VideoCallIcon from '@material-ui/icons/VideoCall';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(5)
    },
    paddingTop: {
        paddingTop: theme.spacing(4),
    },
    sectionTitle: {
        margin: '1rem 0'
    }
}))

const data = {
    patient: {
        name: 'John Doe',
        userType: 'patient',
        avatar: 'https://i.imgur.com/KSwasW4.jpg',
        appointments: [
            {
                id: 1,
                date: 'June 12 2021',
                time: '09:30 AM',
                therapist: { name: 'Mikasa Ackerman', avatar: 'https://i.imgur.com/tId9zxe.jpg' },
                patient: { name: 'John Doe' },
                duration: 30,
                status: 'pending'
            },
            {
                id: 2,
                date: 'June 5 2021',
                time: '04:00 PM',
                therapist: { name: 'Levi Ackerman', avatar: 'https://i.imgur.com/Mh4ISd6.jpg' },
                patient: { name: 'John Doe' },
                duration: 60,
                status: 'completed'
            },
            {
                id: 3,
                date: 'May 4 2021',
                time: '03:00 PM',
                therapist: { name: 'Mikasa Ackerman', avatar: 'https://i.imgur.com/tId9zxe.jpg' },
                patient: { name: 'John Doe' },
                duration: 30,
                status: 'completed'
            },
            {
                id: 4,
                date: 'Jun 15 2021',
                time: '01:00 PM',
                therapist: { name: 'Eren Jaeger', avatar: 'https://i.imgur.com/Mh4ISd6.jpg' },
                patient: { name: 'John Doe' },
                duration: 30,
                status: 'approved'
            },
            {
                id: 5,
                date: 'Jun 20 2021',
                time: '10:00 AM',
                therapist: { name: 'Mikasa Ackerman', avatar: 'https://i.imgur.com/tId9zxe.jpg' },
                patient: { name: 'John Doe' },
                duration: 60,
                status: 'approved'
            },
            {
                id: 6,
                date: 'Jun 13 2021',
                time: '02:00 PM',
                therapist: { name: 'Conny Springer', avatar: '' },
                patient: { name: 'John Doe' },
                duration: 45,
                status: 'approved'
            },
        ]
    }
}

const Home = () => {
    const classes = useStyles()

    const getFavTherapist = (patient) => {
        const completedAppointments = patient.appointments.filter(a => a.status == 'completed')

        const appointmentCounts = completedAppointments.reduce((acc, item) => {
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
        return (totalMins / 60).toFixed(2)
    }

    const getUpcomingData = (patient) => {
        const approvedAppointments = patient.appointments.filter(appointment => appointment.status == 'approved')

        approvedAppointments.sort((a, b) => {
            let dateA = new Date(a.date + ' ' + a.time)
            let dateB = new Date(b.date + ' ' + b.time)

            if (dateA < dateB) {
                return -1
            }

            if (dateA > dateB) {
                return 1
            }

            return 0
        })

        return approvedAppointments
    }

    const favTherapist = getFavTherapist(data.patient)
    const totalSessions = getTotalSessions(data.patient)
    const totalHours = getTotalHours(data.patient)
    const upcomingData = getUpcomingData(data.patient)

    return (
        <div className={classes.root}>
            <Grid container spacing={5} className={classes.paddingTop}>
                <Grid item lg={7}>
                    <Grid item lg={8}>
                        <WelcomeCard name={data.patient.name} userType={data.patient.userType} />
                    </Grid>

                    <Grid container spacing={8} className={classes.paddingTop}>
                        <Grid item lg={4}>
                            <StatsCard color="primary" icon={<VideoCallIcon />} label='Total Sessions' value={totalSessions ? totalSessions : '0'} />
                        </Grid>
                        <Grid item lg={4}>
                            <StatsCard color="secondary" icon={<WatchLaterIcon />} label='Total Hours' value={totalHours ? totalHours : 0} />
                        </Grid>
                        <Grid item lg={4}>
                            <StatsCard color="success" icon={<PersonIcon />} label='Favourite Therapist' value={favTherapist?.name ? favTherapist.name : '-'} />
                        </Grid>
                    </Grid>

                    <Grid container className={classes.paddingTop}>
                        <Grid item lg={12}>
                            <Typography variant="h4" className={classes.sectionTitle}>Upcoming appointments</Typography>
                            <UpcomingAppointments data={upcomingData} />
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
