const BaseService = require("./base-service")
const Therapist = require("../models/therapist")

class TherapistService extends BaseService {}

module.exports = new TherapistService(Therapist)
