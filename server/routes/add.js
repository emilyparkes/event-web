const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const db = require('../db/events')

module.exports = router

router.use(bodyParser.json())

router.get('/create-event', (req, res) => {
  db.createEvent()
    // .then((event) => {
    //   res.send(event)
    // })
    .catch(err => {
      res.status(500).send(err.message)
    })
})