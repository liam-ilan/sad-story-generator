// packages
const Mongo = require('mongodb')
const fs = require('fs')
require('dotenv').config()

// mongoDB
const MongoClient = Mongo.MongoClient
const mongoURI = process.env.MONGODB_URI
const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true }

// db
let db

// connect
MongoClient.connect(mongoURI, mongoOptions, (err, client) => {
  // handle errors
  if (err) { return console.log(err) } else { console.log('connected, fetching data') }

  // get database
  const dbName = mongoURI.substr(mongoURI.lastIndexOf('/') + 1)
  db = client.db(dbName)

  // get stories
  db.collection('stories').distinct('text', {}, function (err, result) {
    // handle error
    if (err) { console.log(err) } else { console.log('data received, writing to file') }

    // data to write
    const txt = JSON.stringify(Object.values(result).filter((item) => {
      // filter length, and mentions of my name
      // name because my class used my name a lot, and I don't want it to show up in the final generation
      // if using yourself, please to customize this filter to your need
      return item.length < 1000 && !item.includes('liam') && !item.includes('Liam')
    }))

    // write to file data
    fs.writeFile('generators/data.json', txt, function (err) {
      if (err) { throw err } else { console.log('finished writing') }

      // close
      client.close()
    })
  })
})
