const router = require("express").Router()
const { appointmentService } = require("../services")

router.get("/", async (req, res) => {
  const appointments = await appointmentService.load()

  res.send(appointments)
})

module.exports = router
