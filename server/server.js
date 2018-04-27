const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const publicEventsRoutes = require('./routes/public-events')
const localEventsRoutes = require('./routes/local-events')
const eventCategoriesRoutes = require('./routes/categories')

const server = express()
server.use(express.static(path.join(__dirname, 'public')))
server.use(bodyParser.json())

// these are the routes we have created
server.use('/api/v1/public-events', publicEventsRoutes)
server.use('/api/v1/local-events', localEventsRoutes)
server.use('/api/v1/eventcategories', eventCategoriesRoutes)

// Default route for non-API requests
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
