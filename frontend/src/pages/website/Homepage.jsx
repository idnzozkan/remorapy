import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        background: "rgb(255,255,255)",
        background: "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(209,207,255,1) 66%, rgba(96,91,255,0.6334908963585435) 100%)"
    },

    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: '1rem 4rem',
        height: '10vh',

        '& a': {
            color: 'black',
            textDecoration: 'none',
            transition: '0.15s ease',

            '&:hover': {
                transform: 'scale(1.05)',
                color: 'white',
                boxShadow: '0px 5px 19px -9px rgba(0,0,0,0.075)',
                webkitBoxShadow: '0px 5px 19px -9px rgba(0,0,0,0.075)',
            }
        }
    },

    hero: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '85vh',
        fontFamily: 'Roboto Condensed',

        '& h2': {
            fontSize: '4rem',
            margin: '1rem 0'
        },

        '& p': {
            fontSize: '1.25rem',
            textAlign: 'center',
        }
    },

    footer: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '0 4rem'
    },

    signInBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem 3rem',
        margin: '1.5rem 0',
        borderRadius: '10px',
        textDecoration: 'none',
        color: 'black',
        background: 'white',
        boxShadow: '0px 5px 19px -9px rgba(0,0,0,0.075)',
        webkitBoxShadow: '0px 5px 19px -9px rgba(0,0,0,0.075)',
        transition: '0.75s ease',

        '&:hover': {
            transform: 'scale(1.05)'
        }
    }


})

const Home = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <nav className={classes.nav}>
                <h1>Remorapy</h1>
                <Link to="/app">
                    Sign In
                </Link>
            </nav>

            <section className={classes.hero}>
                <h2>Welcome to Remorapy</h2>
                <p>Remote Psychotherapy Center <br /> Find the most expert therapists from all around the world with a single click!</p>
                <a className={classes.signInBtn} href="/app">Sign In</a>
            </section>

            <footer className={classes.footer}>
                <span>Created with ❤️ by Deniz Ozkan</span>
            </footer>
        </div>
    )
}

export default Home
