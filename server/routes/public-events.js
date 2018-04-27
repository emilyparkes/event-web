const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const db = require('../db/db.js')

module.exports = router

router.use(bodyParser.json())

router.get('/', (req, res) => {
  db.getPublicEvents()
    .then((publicEvents) => {
      res.send({publicEvents})
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})



// router.get('/:eventName', (req, res) => {
//   const eventName = req.params.eventName
//   db.getEventByName(eventName)
//     .then((event) => {
//       res.send(event)
//     })
//     .catch(err => {
//       res.status(500).send(err.message)
//     })
// })
