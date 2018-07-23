const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const db = require('../db/func/user-profiles')

module.exports = router

router.use(bodyParser.json())

router.get('/profile/:username', (req, res) => {
  const username = req.params.username
  db.getUserProfile(username)
    .then((profile) => {
      res.send(profile)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.put('/profile/:username', (req, res) => {
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
