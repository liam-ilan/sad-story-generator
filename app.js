const express = require('express')
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000

const app = express({ static: true })
app.use('/', express.static('public'))
app.use(bodyParser.json())

app.listen(port)

// make a new game
app.post('/upload', function (req, res) {
  console.log(req.body)

  res.json({'status': 'success'})
})