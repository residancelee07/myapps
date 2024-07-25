const http = require('http');
const html=('html');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3030;
const nodemon = require('nodemon');
const fs = require('fs');
//const tictactoe = require('./Tic-Tac-Toe.js');
const path = require('path')
const filePath = path.join(__dirname,'public');
app.use(express.static(filePath));
app.get('/',(req,res)=>{  
 res.sendFile(`${filePath}/index.html`);
})
app.get('/rps',(req,res)=>{
  res.sendFile(`${filePath}/index1.html`);
})
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

