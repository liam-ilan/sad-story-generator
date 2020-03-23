// packages
const Mongo = require('mongodb')
const fs = require('fs')
require('dotenv').config()

const curseWords = require('./curses')

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
      // if using yourself, please customize this filter to your need
      return item.length < 1000 && !item.includes('liam') && !item.includes('Liam')
    }).map((item) => {
      // some clean up to the data
      let res = item.toLowerCase() // lower case
        .split('-').join(' ') // dashes
        .split('\n').join(' ') // new lines
        .split('"').join(' ') // quotes
        .split('(').join(' ') // parentheses
        .split(')').join(' ')
        .split('[').join(' ') // square brackets
        .split(']').join(' ')
        .split("'").join('') // possessive
        .split('`').join('')
        .split('*').join(' ') // star
        .split(',').join(' ') // commas
        .replace(/\.\.+/g, '.') // multiple .
        .replace(/!!+/g, '!') // multiple !
        .replace(/\?\?+/g, '?') // multiple ?
        .split('!').join('.') // replace ! and ? with .
        .split('?').join('.')
        .replace(/  +/g, ' ') // multiple spaces
        .split(' .').join('.') // if space comes before period, remove

      // remove last space if exists
      if (res.substr(res.length - 1) === ' ') { res = res.substr(0, res.length - 1) }

      // add period to end if missing
      if (res.substr(res.length - 1) !== '.') { res += '.' }

      return res
    }).filter((story) => {
      let res = false
      curseWords.forEach((word) => {
        res = res || story.split(' ').includes(word)
      })

      return !res
    }))

    // write to file data
    fs.writeFile('generators/data.json', txt, function (err) {
      if (err) { throw err } else { console.log('finished writing') }

      // close
      client.close()
    })
  })
})
