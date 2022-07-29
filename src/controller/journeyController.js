const Journey = require("../service/journeyService")
const con = require("../config/db")
module.exports = {

  // GET Action
  getJourney: function(req, res) {
    Journey.get(con, function(err, result) {
      res.send(result)
    })
  },

  getByID: function(req, res) {
    if (req.query?.with_detail === "true") {
      Journey.getListDetailJourney(con, req.params.id, function(err, result) {
        res.send(result)
      })
    } else {
      Journey.getById(con, req.params.id, function(err, result) {
        res.send({
          data: result[0]
        })
      })
    }
  },

  getDetailJourney: function(req, res) {
    Journey.getDetailJourney(con, req.params.detail_id, function(err, result) {
      res.send({
        data: result[0]
      })
    })
  },

  // POST Action
  createJourney: function(req, res) {
    Journey.createJourney(con, req.body, function(err) {
      res.send({status: 200, msg: "Data berhasil Dibuat"})
    })
  },

  createDetailJourney: function(req, res) {
    req.body.journey_id = req.params.id
    Journey.createDetailJourney(con, req.body, function(err) {
      res.send({status: 200, msg: "Data berhasil Dibuat"})
    })
  },

  // PUT Action
  updateJourney: function(req, res) {
    Journey.updateJourney(con, req.body, req.params.id, function(err) {
      res.send({status: 200, msg: "Data berhasil Diupdate"})
    })
  },

  updateDetailJourney: function(req, res) {
    Journey.updateDetailJourney(con, req.body, req.params.detail_id, function(err) {
      res.send({status: 200, msg: "Data berhasil Diupdate"})
    })
  },


  // DELETE Action
  deleteJourney: function(req, res) {
    Journey.deleteJourney(con, req.params.id, function(err) {
      res.send({status: 200, msg: "Data berhasil Dihapus"})
    })
  },

  deleteDetailJourney: function(req, res) {
    Journey.deleteDetailJourney(con, req.params.detail_id, function(err) {
      res.send({status: 200, msg: "Data berhasil Dihapus"})
    })
  }
}