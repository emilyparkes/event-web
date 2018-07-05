// const express = require('express')

// const { userExists, createUser } = require('../db/users')
// const token = require('../auth/token')

// const router = express.Router()

// router.post('/register', register, token.issue)

// function register (req, res, next) {
//   userExists(req.body.username)
//     .then(exists => {
//       if (exists) {
//         return res.status(400).send({ message: 'User exists, please create a different username.' })
//       }
//       createUser(req.body.username, req.body.password)
//         .then(() => next())
//     })
//     .catch(err => {
//       res.status(500).send({ message: err.message })
//     })
// }

// module.exports = router

const bodyParser = require('body-parser')
const express = require('express')

const hash = require('../auth/hash')
const users = require('../db/users')
const token = require('../auth/token')

const router = express.Router()
router.use(bodyParser.json())

router.post('/signin', signIn, token.issue)

router.post('/register', register, token.issue)

function signIn (req, res, next) {
  users.getByName(req.body.username)
    .then(user => {
      return user || invalidCredentials(res)
    })
    .then(user => {
      return user && hash.verifyUser(user.hash, req.body.password)
    })
    .then(isValid => {
      return isValid ? next() : invalidCredentials(res)
    })
    .catch(() => {
      res.status(400).send({
        errorType: 'DATABASE_ERROR'
      })
    })
}

function register (req, res, next) {
  users.userExists(req.body.username)
    .then(exists => {
      if (exists) {
        return res.status(400).send({message: 'User already exists'})
      }
      users.createUser(req.body.username, req.body.password)
        .then(() => next())
    })
    .catch(err => {
      res.status(400).send({message: err.message})
    })
}

function invalidCredentials (res) {
  res.status(400).send({
    errorType: 'INVALID_CREDENTIALS'
  })
}

// Protect all routes beneath this point
// router.use(
//   verifyJwt({
//     secret: getSecret
//   }),
//   auth.handleError
// )

module.exports = router