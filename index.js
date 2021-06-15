const express = require('express')
const path = require('path')
const volleyball = require('volleyball')

const app = express()
const debug = process.env.NODE_ENV === 'test'
const PORT = 5000

const history = require('./history')
const stats = require('./stats')
const countries = require('./countries')

// logging middleware
app.use(volleyball.custom({ debug }))

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// static middleware
app.use(express.static(path.join(__dirname, '../public')))

// CORS middleware configuration
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

// send index.html for any other requests
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  })

// include api routes
app.use('/api', require('./api'))

app.use('./api/history', history)
app.use('./api/stats', stats)
app.use('./api/countries', countries)

// error handling middleware
app.use((err, req, res, next) => {
    if (process.env.NODE_ENV !== 'test') console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal Server Error')
})

// instantiate and listen on custom port
app.listen(PORT, () => console.log(`listening on port ${PORT}`))


module.exports = app 