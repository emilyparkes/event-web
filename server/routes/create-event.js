const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const db = require('../db/events')

module.exports = router

router.use(bodyParser.json())

router.get('/events', (req, res) => {
  request.get('https://geocoder.api.here.com/6.2/geocode.json?app_id={hE5OawYW1TBeyN5UI9vc}&app_code={E_40_tJ5ujOwuSeLFLO8xw}')
    .then(resp => {
      const data = resp.body
      console.log(resp.body)
      res.send(data)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/create-event', (req, res, next) => {
  newEvent = req.body
  db.createEvent(newEvent)
    .then(() => {
      res.sendStatus(200)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
