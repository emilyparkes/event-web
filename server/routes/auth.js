const express = require('express')
const {
  getUserByName,
  createUser} = require('../db/users')
const token = require('../auth/token')
const hash = require('../auth/hash')

const router = express.Router()

router.post('/register', register, token.issue)
router.post('/signin', signIn, token.issue)

function register (req, res, next) {
  const {username, password} = req.body
  createUser({username, password})
    .then(([id]) => {
      res.locals.userId = id
      next()
    })
    .catch(({message}) => {
      if (message.includes('UNIQUE constraint failed: users.username')) {
        return res.status(400).json({
          ok: false,
          message: 'Username already exists.'
        })
      }
      res.status(500).json({
        ok: false,
        message: "Something bad happened. We don't know why."
      })
    })
}

function signIn (req, res, next) {
  getUserByName(req.body.username)
    .then(user => {
      return user
      // || invalidCredentials(res)
    })
    .then(user => {
      return user && hash.verify(user.hash, req.body.password)
    })
    .then(isValid => {
      return isValid ? next() : invalidCredentials(res)
    })
    .catch((err) => {
      res.status(400).send({
        errorType: err.message
        // 'DATABASE_ERROR'
      })
    })
}

function invalidCredentials (res) {
  res.status(400).send({
    errorType: 'INVALID_CREDENTIALS'
  })
}

module.exports = router
