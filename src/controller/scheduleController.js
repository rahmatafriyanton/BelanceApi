const Schedule = require("../service/scheduleService")
const con = require("../config/db")

module.exports = {
	getSchedule: function(req, res) {
    Schedule.getSchedule(con, function(err, result) {
      res.send({
        data: result
      })
    })
  },

  getScheduleByID: function(req, res) {
    Schedule.getScheduleByID(con, req.params.id, function(err, result) {
      res.send({
        data: result[0]
      })
    })
  },

  createSchedule: function(req, res) {
    Schedule.createSchedule(con, req.body, function(err) {
      res.send(req.body)
    })
  },

  updateSchedule: function(req, res) {
    Schedule.updateSchedule(con, req.body, req.params.id, function(err) {
      res.send(req.params.id)
    })
  },

  deleteSchedule: function(req, res) {
    Schedule.deleteSchedule(con, req.params.id, function(err) {
      res.send("Berhasil hapus")
    })
  },
}