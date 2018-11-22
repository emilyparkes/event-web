const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const db = require('../db/events')

module.exports = router

router.use(bodyParser.json())

router.get('/', (req, res) => {
  db.getAllEvents()
    .then((events) => {
      res.send(events)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
