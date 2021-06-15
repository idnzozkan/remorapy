const router = require("express").Router()
const { appointmentService } = require("../services")

router.get("/", async (req, res) => {
  const appointments = await appointmentService.load()

  res.send(appointments)
})

router.get("/:appointmentId", async (req, res) => {
  const appointment = await appointmentService.find(req.params.appointmentId)

  res.send(appointment)
})

router.delete("/:appointmentId", async (req, res) => {
  await appointmentService.removeBy("_id", req.params.appointmentId)

  res.send("OK")
})

module.exports = router
