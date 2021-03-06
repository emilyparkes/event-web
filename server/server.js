const path = require('path')
const express = require('express')
const passport = require('passport')
const bodyParser = require('body-parser')

const eventsRoutes = require('./routes/events')
const publicEventsRoutes = require('./routes/public-events')
const localEventsRoutes = require('./routes/local-events')
const eventCategoriesRoutes = require('./routes/categories')

const ticketmasterRoutes = require('./routes/ticketmaster')

const usersRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')
const addRoutes = require('./routes/create-event')

const notifyRoutes = require('./routes/notify')

const server = express()
server.use(express.static(path.join(__dirname, 'public')))
server.use(bodyParser.json())
server.use(passport.initialize())
server.use(express.json())

// these are the routes we have created
server.use('/api/v1/events', eventsRoutes)
server.use('/api/v1/public-events', publicEventsRoutes)
server.use('/api/v1/local-events', localEventsRoutes)
server.use('/api/v1/eventscategories', eventCategoriesRoutes)

server.use('/api/v1/ticketmaster', ticketmasterRoutes)

server.use('/api/v1/users', usersRoutes)
server.use('/api/v1/auth', authRoutes)
server.use('/api/v1/add', addRoutes)

server.use('/api/v1/notify', notifyRoutes)

// Default route for non-API requests
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
