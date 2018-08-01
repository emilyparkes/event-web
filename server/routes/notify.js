const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const db = require('../db/notify')

module.exports = router

router.use(bodyParser.json())

router.get('/', (req, res) => {
  db.getFriendsList(1)
    .then((friendsList) => {
      res.send({friendsList})
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
