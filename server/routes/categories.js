const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const db = require('../db/events')

module.exports = router

router.use(bodyParser.json())

router.get('/:category', (req, res) => {
  const category = req.params.category
  db.getCategoryByName(category)
    .then((category) => {
      res.send(category)
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

// router.get('/:category/:eventName', (req, res) => {
//   const eventName = req.params.eventName
//   db.getEventByName(eventName)
//     .then((event) => {
//       res.send(event)
//     })
//     .catch(err => {
//       res.status(500).send(err.message)
//     })
// })


