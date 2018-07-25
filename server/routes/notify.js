const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const db = require('../db/notify')

module.exports = router

router.use(bodyParser.json())

router.get('/friends', (req, res) => {
  db.getFriendsList(1)
    .then((friendsList) => {
      res.send({ friendsList })
    })
  .catch(err => {
    res.status(500).send(err.message)
  })
})

router.get('/interests', (req, res) => {
  db.getInterestedInList(1)
    .then((interestedIn) => {
      res.send({interestedIn})
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
