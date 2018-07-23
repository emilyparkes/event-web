const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const db = require('../db/events')

module.exports = router

router.use(bodyParser.json())

router.get('/categories/:category/:eventName', (req, res) => {
  const category = req.params.category
  const eventName = req.params.eventName
  db.getEventFromCategory(category, eventName)
    .then((event) => {
      res.send(event)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/categories/:category', (req, res) => {
  const category = req.params.category
  db.getEventsByCategory(category)
    .then((events) => {
      res.send(events)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/', (req, res) => {
  db.getCategories()
    .then((categories) => {
      res.send({categories})
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
