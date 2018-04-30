const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const db = require('../db/db.js')

module.exports = router

router.use(bodyParser.json())

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getPublicEventByName(id)
    .then((event) => {
      res.send(event)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/', (req, res) => {
  db.getPublicEvents()
    .then((publicEvents) => {
      res.send({publicEvents})
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
