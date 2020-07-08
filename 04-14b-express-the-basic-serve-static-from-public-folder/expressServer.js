
const path = require('path');

const express = require('express');
const app = express();

// serve up static files! Only 1 line
app.use(express.static('public'))

app.all('/',(req, res)=>{
  res.sendFile(path.join(__dirname + '/node.html'))
});

// if you specific file in your route like
//    http://localhost:3333/foo
// this will run
app.all('*',(req, res)=>{
  res.send('<h1>Sorry, that file does not exit')
});

app.listen(3333)
console.log("The server is listening on port 3333...")

