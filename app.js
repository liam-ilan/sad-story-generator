// packages
const express = require('express')
const bodyParser = require('body-parser')
const Mongo = require('mongodb')
require('dotenv').config()

// generators
const generators = {
  orderone: require('./generators/orderone.js'),
  ordertwo: require('./generators/ordertwo.js')
}

// mongoDB
const MongoClient = Mongo.MongoClient
const mongoURI = process.env.MONGODB_URI
const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true }

// make our app
const port = process.env.PORT || 3000
const app = express({ static: true })

app.use('/', express.static('public'))
app.use(bodyParser.json())

// connect to the database
let db

MongoClient.connect(mongoURI, mongoOptions, (err, client) => {
  // handle errors
  if (err) return console.log({ fail: 'database error' })

  // get database
  const dbName = mongoURI.substr(mongoURI.lastIndexOf('/') + 1)
  db = client.db(dbName)

  // listen
  app.listen(port)
})

// main path
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/homepage/index.html`)
})

// upload story
app.post('/api/upload', function (req, res) {
  const story = req.body

  // add story to the database
  db.collection('stories').insertOne(story, function (err, result) {
    // handle error
    if (err) return res.json({ fail: 'database error' })
  })

  // return status
  res.json({ status: 'success' })
})

// generate story
app.get('/api/generate/:type', function (req, res) {
  // get type
  const { type } = req.params

  // Check if type matches generator (done with loop and not direct access for security)
  Object.keys(generators).forEach((generator) => {
    if (generator === type) {
      // return story object
      res.json({ story: generators[generator]() })
    }
  })
})
