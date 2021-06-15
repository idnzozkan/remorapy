const BaseService = require("./base-service")
const Appointment = require("../models/appointment")
const therapistService = require("./therapist-service")
const patientService = require("./patient-service")
class AppointmentService extends BaseService {
  filterByPatient() {}

  async makeAppointment(therapistId, patientId, dateData, timeData, duration) {
    const therapist = await therapistService.find(therapistId)
    const patient = await patientService.find(patientId)

    const date = new Date(dateData + " " + timeData)

    const fee = duration * therapist.hourlyRate

    const appointment = await this.insert({ therapist, patient, date, duration, fee })
    patient.appointments.push(appointment)
    therapist.appointments.push(appointment)

    await passenger.save()
    await therapist.save()

    return appointment
  }
}

module.exports = new AppointmentService(Appointment)
