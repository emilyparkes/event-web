export default process.env.NODE_ENV === 'production'
  ? 'http://www.'
  : 'http://localhost:3000'
