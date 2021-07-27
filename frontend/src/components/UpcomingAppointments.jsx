import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import palette from '../theme/palette'
import Table from '@material-ui/core/Table'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '40vh'
    },
    noAppointments: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '40vh',

        '& h5': {
            color: '#545454',
            marginBottom: '1.5rem'
        }
    },
    tableHead: {
        background: palette.neutral
    },
    tableCell: {
        border: 'none',
    },
    tableRow: {
        background: palette.white,
        boxShadow: "0px 5px 19px -9px rgba(0,0,0,0.075)",
        WebkitBoxShadow: "0px 5px 19px -9px rgba(0,0,0,0.075)",
        transition: '0.15s ease-out',

        '&:hover': {
            background: palette.primary.main,
            '& td': {
                color: palette.white,
                '& button, a': {
                    color: palette.white,
                    border: `1px solid ${palette.white}`
                },
                '& .disabledBtn': {
                    color: palette.white,
                    border: `1px solid ${palette.white}`
                }
            }
        }
    },
    leftRadius: {
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
    rightRadius: {
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    therapistContainer: {
        display: 'flex',
        alignItems: 'center',
        '& div': {
            borderRadius: '30%',
        },
        '& span': {
            marginLeft: 20
        }
    },
    rowGap: {
        height: '20px'
    }
}))

const UpcomingAppointments = ({ data }) => {
    const classes = useStyles()

    const isAppointmentTimeCame = (date, time) => {
        const currentDate = new Date()
        const appointmentDate = new Date(date + " " + time)

        if (currentDate > appointmentDate) {
            return true
        } else {
            return false
        }
    }

    return (
        <TableContainer className={classes.root}>
            {data.length == 0 ? (
                <Card className={classes.noAppointments}>
                    <Typography variant="h5">No Appointments</Typography>
                    <Button color="primary" variant="outlined" href="/app/find-therapist">Find Therapist</Button>
                </Card>
            ) :
                (<Table>
                    <TableHead className={classes.tableHead}>
                        <TableCell className={classes.tableCell}>Therapist</TableCell>
                        <TableCell className={classes.tableCell}>Date</TableCell>
                        <TableCell className={classes.tableCell}>Time</TableCell>
                        <TableCell className={classes.tableCell}>Duration</TableCell>
                        <TableCell className={classes.tableCell}></TableCell>
                    </TableHead>
                    <TableBody>
                        {data.map(row => (
                            <>
                                <TableRow className={classes.tableRow}>
                                    <TableCell className={clsx(classes.tableCell, classes.leftRadius)}>
                                        <div className={classes.therapistContainer}>
                                            <Avatar alt={row.therapist.name} src={row.therapist.avatar} />
                                            <span>{row.therapist.name}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className={classes.tableCell}>{row.date}</TableCell>
                                    <TableCell className={classes.tableCell}>{row.time}</TableCell>
                                    <TableCell className={classes.tableCell}>{row.duration} mins</TableCell>
                                    <TableCell className={clsx(classes.tableCell, classes.rightRadius)}>
                                        {isAppointmentTimeCame(row.date, row.time) ? (<Button variant="outlined" color="primary">Go to Session</Button>) : ''}
                                    </TableCell>
                                </TableRow>
                                <div className={classes.rowGap}></div>
                            </>
                        ))}
                    </TableBody>
                </Table>)}
        </TableContainer>
    )
}

export default UpcomingAppointments
