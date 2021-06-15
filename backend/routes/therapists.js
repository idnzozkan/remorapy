const router = require("express").Router()
const { therapistService } = require("../services")

router.get("/", async (req, res) => {
  const therapists = await therapistService.load()

  res.send(therapists)
})

router.post("/", async (req, res) => {
  try {
    const therapist = await therapistService.insert(req.body)
    res.send(therapist)
  } catch (error) {
    console.error(error)
  }
})

router.get("/:therapistId", async (req, res) => {
  const therapist = await therapistService.find(req.params.therapistId)

  res.send(therapist)
})

router.delete("/:therapistId", async (req, res) => {
  await therapistService.removeBy("_id", req.params.therapistId)

  res.send("OK")
})

module.exports = router
