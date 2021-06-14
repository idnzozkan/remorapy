const router = require("express").Router()
const { therapistService } = require("../services")

router.get("/", async (req, res) => {
  const therapists = await therapistService.load()

  res.send(therapists)
})

module.exports = router
