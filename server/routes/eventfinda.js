const express = require('express')
const router = express.Router()
const path = require('path')
const request = require('superagent')

router.use(express.json())
router.use(express.static(path.join(__dirname, './public')))

const buf = Buffer.from('eventweb' + ':' + 'rh526df55bvm')
const headerValue = `Basic ${buf.toString('base64')}`



router.get('/eventf', (req, res) => {
  request.get('http://api.eventfinda.co.nz/v2/events.json')
    .set("Authorization", headerValue)
    .then(resp => {
      const events = resp.body.events[0]
      console.log(resp.body.events[0])
      res.send(events)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router

