const express = require("express")
const app = express()
var methodOverride = require("method-override")
const con = require("./src/config/db.js")


// connecting route to database
// app.use(function(req, res, next) {
//   req.con = con
//   next()
// })

// parsing body request
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))

// include router
const journeyRouter = require("./src/routes/journeyRouter")
app.use("/journey", journeyRouter)

const scheduleRouter = require("./src/routes/scheduleRouter")
app.use("/schedule", scheduleRouter)


// starting server
app.listen(3000, function() {
  console.log("server listening on port 3000")
})
