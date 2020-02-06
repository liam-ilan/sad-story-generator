// packages
const express = require('express')
const bodyParser = require('body-parser')
const Mongo = require('mongodb')
require('dotenv').config()

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

// make a new game
app.post('/upload', function (req, res) {
  const story = req.body

  // add story to the database
  db.collection('stories').insertOne(story, function (err, result) {
    // handle error
    if (err) return res.json({ fail: 'database error' })
  })

  // return status
  res.json({ status: 'success' })
})
