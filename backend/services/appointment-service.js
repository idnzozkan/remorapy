const BaseService = require("./base-service")
const Appointment = require("../models/appointment")

class AppointmentService extends BaseService {}

module.exports = new AppointmentService(Appointment)
