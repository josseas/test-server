var express = require('express')
  , http = require('http')
  , app = express()
  , server = http.createServer(app)

  app.get('/', function (req, res) {
    res.send('Hello World!');
  });


server.listen(80,'0.0.0.0',function(){
//  server.close(function(){
// //    server.listen(8001,'192.168.0.202')
//  })
console.log('Example app listening on port 3000!');
})