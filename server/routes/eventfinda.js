const express = require('express')
const router = express.Router()
const path = require('path')
const request = require('superagent')

const db = require('../db/events')


router.use(express.json())
router.use(express.static(path.join(__dirname, './public')))


router.get('/eventf', (req, res) => {
  const buf = Buffer.from('eventweb' + ':' + 'rh526df55bvm')
  const headerValue = `Basic ${buf.toString('base64')}`

  request.get('http://api.eventfinda.co.nz/v2/events.json')
    .set("Authorization", headerValue)
    .then(resp => {
      resp.body
      console.log(resp)
      res.json({ name, url, session })
    })
    .catch(err => {
      res.json({ error: err.message })
    })
})



module.exports = router

// ("Authorization", "Basic " + btoa(username + ":" + password))

// const username = 'eventweb'
// const password = 'rh526df55bvm'
// ?row=10&fields=event:(url,name,sessions),session:(timezone,datetime_start)&q=concert&order=popularity