const path = require('path')
const express = require('express')
// const passport = require('passport')

const server = express()
// server.use(bodyParser.json())
server.use(express.urlencoded({extended: false}))
server.use(express.static(path.join(__dirname, 'public')))

const publicEventsRoutes = require('./routes/public-events')
const localEventsRoutes = require('./routes/local-events')
const eventCategoriesRoutes = require('./routes/categories')

// these are the routes we have created
server.use('/api/v1/publicevents', publicEventsRoutes)
server.use('/api/v1/localevents', localEventsRoutes)
server.use('/api/v1/eventcategories', eventCategoriesRoutes)

// Default route for non-API requests
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
