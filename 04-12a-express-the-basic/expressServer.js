
const express = require('express');
const app = express();


app.all('*',(req, res)=>{
  // Express handles the basic headers (status code, mime-type)!
  res.send(`<h1>This is the home page</h1>`)
  // Express handles the end!
});

app.listen(3333)
console.log("The server is listening on port 3333...")



