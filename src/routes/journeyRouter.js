const express = require("express")
const router = express.Router()
const journeyController = require("../controller/journeyController")


// Get All Journey List
router.get("/", journeyController.getJourney)
// Get Journey By ID
router.get("/:id", journeyController.getByID)
// Get Detail Journey By ID
router.get("/:id/detail/:detail_id", journeyController.getDetailJourney)

// Create New Journey
router.post("/", journeyController.createJourney)
// Create New Detail Journey
router.post("/:id/detail/", journeyController.createDetailJourney)


// Update Journey
router.put("/:id", journeyController.updateJourney)
// Update Detail Journey
router.put("/:id/detail/:detail_id", journeyController.updateDetailJourney)

// Delete Journey
router.delete("/:id", journeyController.deleteJourney)
// Delete Detail Journey
router.delete("/:id/detail/:detail_id", journeyController.deleteDetailJourney)


module.exports = router