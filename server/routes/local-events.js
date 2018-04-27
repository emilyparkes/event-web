const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const db = require('../db/db')

module.exports = router

router.use(bodyParser.json())

router.get('/', (req, res) => {
  db.getLocalEvents()
    .then((localEvents) => {
      res.send({localEvents})
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

// router.get('/local-events/:eventName', (req, res) => {
//   const eventName = req.params.eventName
//   db.getEventByName(eventName)
//     .then((event) => {
//       res.send(event)
//     })
//     .catch(err => {
//       res.status(500).send(err.message)
//     })
// })
