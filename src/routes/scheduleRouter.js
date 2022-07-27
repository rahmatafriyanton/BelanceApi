const express = require("express")
const router = express.Router()
const scheduleController = require("../controller/scheduleController")



// Get All Schedule List
router.get("/", scheduleController.getSchedule)
router.get("/:id", scheduleController.getScheduleByID)

// Add Schedule
router.post("/", scheduleController.createSchedule)

// Update Schedule
router.put("/:id", scheduleController.updateSchedule)

// Delete Schedule
router.delete("/:id", scheduleController.deleteSchedule)


module.exports = router