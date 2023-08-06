const express = require('express');
const dotenv = require('dotenv');

const app = express();

dotenv.config({path:'config.env'})
const PORT = process.env.PORT||8080

app.get('/',(req,res)=>{
  res.send('Crud application');
})

app.listen(3000,()=>{
  console.log(`server is running on http://localhost:${PORT}`)
})