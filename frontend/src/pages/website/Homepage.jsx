import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: '1rem 4rem',
    },

    hero: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "70vh",
        background: "#e5e5ff"
    },

    findTherapist: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        background: "#fffde5",
        padding: "4rem 2rem",

        '& .therapist-cards': {
            marginTop: "5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            '& div': {
                margin: "0 5rem",
                padding: "2rem",
                background: "white",
                borderRwadius: "1rem",
                border: "1px solid gold",
            }
        }
    },

    footer: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100%",
    }
})

const Home = () => {
    const classes = useStyles()

    return (
        <div>
            <header>
                <nav className={classes.nav}>
                    <h1>Remorapy</h1>
                    <Link to="/app">
                        Sign In
                    </Link>
                </nav>

                <section className={classes.hero}>
                    <h2>Welcome to Remorapy!</h2>
                    <p>Remote Psychotherapy Center. Find the most expert therapists from all around the world with a single click!</p>
                </section>

            </header>

            <section className={classes.findTherapist}>
                <h2>Find expert therapists</h2>
                <div className="therapist-cards">
                    <div>card</div>
                    <div>card</div>
                    <div>card</div>
                    <div>card</div>
                </div>
            </section>

            <footer className={classes.footer}>
                <span>Created with ❤️ by Deniz Ozkan</span>
            </footer>
        </div>
    )
}

export default Home
