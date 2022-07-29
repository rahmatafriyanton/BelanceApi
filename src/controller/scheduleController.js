const Schedule = require("../service/scheduleService")
const con = require("../config/db")

module.exports = {
	getSchedule: function(req, res) {
    Schedule.getSchedule(con, function(err, result) {
      res.send(result)
    })
  },

  getScheduleByID: function(req, res) {
    Schedule.getScheduleByID(con, req.params.id, function(err, result) {
      res.send(result[0])
    })
  },

  createSchedule: function(req, res) {
    Schedule.createSchedule(con, req.body, function(err) {
      res.send({status: 200, msg: "Data berhasil Dibuat"})
    })
  },

  updateSchedule: function(req, res) {
    Schedule.updateSchedule(con, req.body, req.params.id, function(err) {
      res.send({status: 200, msg: 'Berhasil Update Schedule'})
      // res.send(req.body)
    })
  },

  deleteSchedule: function(req, res) {
    Schedule.deleteSchedule(con, req.params.id, function(err) {
      // res.send("Berhasil hapus")
      res.send({status: 200, msg: 'Berhasil Hapus Schedule'})
    })
  },
}