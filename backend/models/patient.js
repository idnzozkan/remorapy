const mongoose = require("mongoose")

const PatientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  country: String,
  spokenLangs: [String],
  avatar: String,
  email: String,
  userType: {
    type: String,
    default: "patient"
  },
  appointments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Appointment",
      autopopulate: { maxDepth: 2 }
    }
  ]
})

PatientSchema.plugin(require("mongoose-autopopulate"))

module.exports = mongoose.model("Patient", PatientSchema)
