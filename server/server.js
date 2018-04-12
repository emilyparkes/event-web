const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
// const passport = require('passport')

const server = express()
server.use(passport.initialize())
server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, 'public')))

const adddbRoutes = require('./routes/adddb')

// these are the routes we have created
server.use('/api/v1/adddb', adddbRoutes)

// Default route for non-API requests
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
