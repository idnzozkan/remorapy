const express = require("express")
const cors = require("cors")

const patientsRouter = require("./routes/patients")
const therapistsRouter = require("./routes/therapists")
const appointmentsRouter = require("./routes/appointments")
require("./mongo-connection")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use("/patients", patientsRouter)
app.use("/therapists", therapistsRouter)
app.use("/appointments", appointmentsRouter)

module.exports = app
