const BaseService = require("./base-service")
const Patient = require("../models/patient")

class PatientService extends BaseService {}

module.exports = new PatientService(Patient)
