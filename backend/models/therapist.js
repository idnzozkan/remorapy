const mongoose = require("mongoose")

const TherapistSchema = new mongoose.Schema({
  name: String,
  age: Number,
  country: String,
  spokenLangs: [String],
  avatar: String,
  hourlyRate: Number,
  email: String,
  userType: {
    type: String,
    default: "therapist"
  },
  bio: String,
  starCount: Number,
  fullDates: [{}],
  appointments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Appointment",
      autopopulate: { maxDepth: 2 }
    }
  ],
  patients: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      autopopulate: { maxDepth: 1 }
    }
  ]
})

TherapistSchema.plugin(require("mongoose-autopopulate"))

module.exports = mongoose.model("Therapist", TherapistSchema)
