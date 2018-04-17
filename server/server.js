const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
// const passport = require('passport')

const server = express()
server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, 'public')))

const publicEventsRoutes = require('./routes/public-events')
const localEventsRoutes = require('./routes/local-events')

// these are the routes we have created
server.use('/api/v1/1events', publicEventsRoutes)
server.use('/api/v1/2events', localEventsRoutes)

// Default route for non-API requests
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
