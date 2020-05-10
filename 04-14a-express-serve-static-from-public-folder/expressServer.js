
const express = require('express');
const app = express();

// app comes with a use method
// use takes 1 arg (right now):
// 1. the middleware you want to run
app.use(express.static('public'))

// you can serve another public folder
app.use(express.static('node_modules'))
// try http://localhost:3333/express/readme.MD

app.listen(3333);
console.log("Server listening on port 3333...")



