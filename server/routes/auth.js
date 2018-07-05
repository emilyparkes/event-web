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

const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const hash = require('../auth/hash')
const {userExists, createUser, getUserByName} = require('../db/users')
const token = require('../auth/token')

module.exports = router

router.use(bodyParser.json())

router.post('/register', register, token.issue)

function register (req, res, next) {
  userExists(req.body.username)
    .then(exists => {
      if (exists) {
        return res.status(400).send({message: 'User already exists'})
      }
      createUser(req.body.displayname, req.body.email, req.body.username, req.body.password)
        .then(() => next())
    })
    .catch(err => {
      res.status(400).send({message: err.message})
    })
}


router.post('/signin', signIn, token.issue) 

function signIn (req, res, next) {
  getUserByName(req.body.username)
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