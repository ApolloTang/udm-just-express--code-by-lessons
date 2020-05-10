
const express = require('express');
const app = express();

app.get('/',(req, res)=>{
  res.send(`<h1>first one`)
})

// this will not run because it is a repeat of above
app.get('/',(req, res)=>{
  res.send(`<h1>second one, ignore`)
})

app.listen(3333)
console.log("The server is listening on port 3000...")


