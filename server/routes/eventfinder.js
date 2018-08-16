const express = require('express')
const router = express.Router()
const path = require('path')
const request = require('superagent')

const db = require('../db/events')

const router = express()

router.use(express.json())
router.use(express.static(path.join(__dirname, './public')))

router.get('/api/v1/eventfinda', (req, res) => {
  request.get('http://api.eventfinda.co.nz/v2/events.xml?row=10&fields=event:(url,name,sessions),session:(timezone,datetime_start)&q=concert&order=popularity')
    .then(resp => {
      const {name, url} = resp.body
      res.json({name, url})
    })
    .catch(err => {
      res.json({error: err.message})
    })
})

module.exports = router
