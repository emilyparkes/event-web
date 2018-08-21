const express = require('express')
const router = express.Router()
const path = require('path')
const request = require('superagent')

router.use(express.json())
router.use(express.static(path.join(__dirname, './public')))

// const buf = Buffer.from('eventweb' + ':' + 'rh526df55bvm')
// const headerValue = `Basic ${buf.toString('base64')}`



router.get('/events', (req, res) => {
  request.get('https://app.ticketmaster.com/discovery/v2/events.json?countryCode=NZ&apikey=CYZHuVa4FtvN1VzfaCoaEFmUDaXlDn1y')
    .then(resp => {
      const data = resp.body._embedded
      // console.log(resp.body._embedded.events)
      res.send(data.events)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router

