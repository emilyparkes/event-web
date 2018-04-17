const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const db = require('../db/db')

module.exports = router

router.use(bodyParser.json())

router.get('/public-events', (req, res) => {
  db.function(data)
    .then((sendthis) => {
      res.send(sendthis)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/public-events', (req, res) => {
  db.function(data)
    .then((sendthis) => {
      res.send(sendthis)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/local-events', (req, res) => {
  db.function(data)
    .then((sendthis) => {
      res.send(sendthis)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/local-events', (req, res) => {
  db.function(data)
    .then((sendthis) => {
      res.send(sendthis)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})


