const path = require('path')
const express = require('express')
const passport = require('passport')
const bodyParser = require('body-parser')

const publicEventsRoutes = require('./routes/public-events')
const localEventsRoutes = require('./routes/local-events')
const eventCategoriesRoutes = require('./routes/categories')

const eventfindaRoutes = require('./routes/eventfinda')

const usersRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')

const notifyRoutes = require('./routes/notify')

const server = express()
server.use(express.static(path.join(__dirname, 'public')))
server.use(bodyParser.json())
server.use(passport.initialize())
server.use(express.json())

// these are the routes we have created
server.use('/api/v1/public-events', publicEventsRoutes)
server.use('/api/v1/local-events', localEventsRoutes)
server.use('/api/v1/eventscategories', eventCategoriesRoutes)

server.use('/api/v1/eventfinda', eventfindaRoutes)

server.use('/api/v1/users', usersRoutes)
server.use('/api/v1/auth', authRoutes)

server.use('/api/v1/notify', notifyRoutes)

// Default route for non-API requests
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
