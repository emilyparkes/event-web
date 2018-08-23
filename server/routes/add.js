const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const db = require('../db/events')

module.exports = router

router.use(bodyParser.json())

router.post('/create-event', (req, res) => {
  newEvent = res.body
  db.createEvent(newEvent)
    // .then((event) => {
    //   res.send(event)
    // })
    .catch(err => {
      res.status(500).send(err.message)
    })
})