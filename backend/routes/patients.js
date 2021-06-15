const router = require("express").Router()
const { patientService, appointmentService } = require("../services")

router.get("/", async (req, res) => {
  const patients = await patientService.load()

  res.send(patients)
})

router.post("/", async (req, res) => {
  try {
    const patient = await patientService.insert(req.body)
    res.send(patient)
  } catch (error) {
    console.error(error)
  }
})

router.post("/:patientId/appointments", async (req, res) => {
  try {
    const { patientId } = req.params
    const { therapistId, dateData, timeData, duration } = req.body

    const appointment = await appointmentService.makeAppointment(
      therapistId,
      patientId,
      dateData,
      timeData,
      duration
    )

    res.send(appointment)
  } catch (error) {
    console.error(error)
  }
})

router.get("/:patientId", async (req, res) => {
  const patient = await patientService.find(req.params.patientId)

  res.send(patient)
})

router.delete("/:patientId", async (req, res) => {
  await patientService.removeBy("_id", req.params.patientId)

  res.send("OK")
})

module.exports = router
