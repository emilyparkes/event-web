const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const db = require('../db/user-profiles')

module.exports = router

router.use(bodyParser.json())

router.get('/profile/:id', (req, res) => {
  const userId = req.params.id
  db.getUserProfile(userId)
    .then((profile) => {
      res.send(profile)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
