const router = require("express").Router()
const { patientService } = require("../services")

router.get("/", async (req, res) => {
  const patients = await patientService.load()

  res.send(patients)
})

module.exports = router
