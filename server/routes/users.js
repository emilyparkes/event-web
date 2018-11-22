const express = require('express')
const bodyParser = require('body-parser')
const token = require('../auth/token')

const router = express.Router()

const db = require('../db/user-profiles')

module.exports = router

router.use(bodyParser.json())

router.get('/profile/:username', token.decode, (req, res) => {
  const username = req.params.username
  db.getUserProfile(username)
    .then((profile) => {
      res.send(profile)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.put('/profile/:username', token.decode, (req, res) => {
  const username = req.params.username
  const updatedProfile = req.body
  db.updateUserProfile(updatedProfile, username)
    .then(() => {
      res.sendStatus(200)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
