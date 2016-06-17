

var fallback = require('express-history-api-fallback')
var express = require('express')

const port = process.env.PORT || 8080

var app = express()
var root = __dirname + '/build'
app.use(express.static(root))
app.use(fallback('index.html', { root: root }))




app.listen(port);
console.log(`Listening at server:${port}`)
