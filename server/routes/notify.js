const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const db = require('../db/notify')

module.exports = router

router.use(bodyParser.json())

router.get('/invitedto', (req, res) => {
  db.getInvitedToList(1)
    .then((invitedTo) => {
      res.send({invitedTo})
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/friends', (req, res) => {
  db.getFriendsList(1)
    .then((friendsList) => {
      res.send({friendsList})
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/interestedin', (req, res) => {
  db.getInterestedInList(1)
    .then((interestedIn) => {
      res.send({interestedIn})
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/goingto', (req, res) => {
  db.getGoingToList(1)
    .then((goingTo) => {
      res.send({goingTo})
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
