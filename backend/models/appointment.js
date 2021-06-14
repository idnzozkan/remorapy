const mongoose = require("mongoose")

const AppointmentSchema = new mongoose.Schema({
  therapist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Therapist",
    autopopulate: { maxDepth: 2 }
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    autopopulate: { maxDepth: 2 }
  },
  date: Date,
  time: Date,
  duration: Number
})

AppointmentSchema.plugin(require("mongoose-autopopulate"))

module.exports = mongoose.model("Appointment", AppointmentSchema)
