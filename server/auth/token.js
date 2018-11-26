const jwt = require('jsonwebtoken')
const verifyJwt = require('express-jwt')

const jwtTestSecret = require('../../test/server/routes/jwt-test-secret.js')

module.exports = {
  issue,
  decode,
  createToken
  // ^ exported for testing
}

function issue (req, res) {
  res.json({
    ok: true,
    message: 'Authentication successful.',
    token: createToken(res.locals.userId)
  })
}

function createToken (id) {
  return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '1d'})
}

function decode (req, res, next) {
  verifyJwt({
    secret: getSecret
  })(req, res, next)
}

function getSecret (req, payload, done) {
  const secret = process.env.JWT_SECRET || jwtTestSecret
  if (secret === jwtTestSecret) {
    // console.warn('ATTENTION: Using the JWT Test secret')
  }
  done(null, secret)
}
