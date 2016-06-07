const path = require('path')
const express = require('express')
const port = process.env.PORT || 8080


    const app = express()
//     const indexPath = path.join(__dirname, 'src/app/app.jsx')
// //    const publicPath = express.static(path.join(__dirname, '../public'))
     const srcPath = express.static(path.join(__dirname, 'build'))
//
     app.use('/', srcPath)
//     app.get('/', function (_, res) { res.sendFile(indexPath) })


  app.listen(port);
  console.log(`Listening at server:${port}`)
