// packages
const Mongo = require('mongodb')
const fs = require('fs')
require('dotenv').config()

// mongoDB
const MongoClient = Mongo.MongoClient
const mongoURI = process.env.MONGODB_URI
const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true }

let db

// connect
MongoClient.connect(mongoURI, mongoOptions, (err, client) => {

  // handle errors
  if (err) return console.log({ fail: 'database error' })

  // get database
  const dbName = mongoURI.substr(mongoURI.lastIndexOf('/') + 1)
  db = client.db(dbName)

  // get stories
  db.collection('stories').distinct('text', {}, function (err, result) {

    // handle error
    if (err) return res.json({ fail: 'database error' })

    // write to file data
    fs.writeFile('generators/data.json', JSON.stringify(result), function (err) {
      if (err) throw err
      console.log('finished writing')
    })
  })
})


