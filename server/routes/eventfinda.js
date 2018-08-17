const express = require('express')
const router = express.Router()
const path = require('path')
const request = require('superagent')

router.use(express.json())
router.use(express.static(path.join(__dirname, './public')))


router.get('/eventf', (req, res) => {
  const buf = Buffer.from('eventweb' + ':' + 'rh526df55bvm')
  const headerValue = `Basic ${buf.toString('base64')}`

  request.get('http://api.eventfinda.co.nz/v2/events.json')
    .set("Authorization", headerValue)
    .then(res => {
      const events = res.body.events[0]
      console.log(res.body.events[0])
      res.json(events)
    })
    .catch(err => {
      res.send({ error: err.message })
    })
})

module.exports = router
