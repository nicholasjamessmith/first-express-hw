//After creating a Javascript file 'server.js' and running command 'npm init', you should receive a 'package.json' in your working directory

//Install express using 'npm i express' or 'npm i express -y' to skip intial questions.

//Require 'express'
const express = require("express")
//Set the app
const app = express()
//Tell the server where to listen for request (port #) (*see bottom of 'server.js'*)

app.get("/greeting/:name", (req, res) => {
  //res.send("Hello, stranger")
  //res.send(req.params)
  const name = "Nicholas"
  res.send(`What's up, ${name}`)
})

//Give app a route of '/tip' which should expect 2 params ('total' and 'tipPercentage'
app.get("/tip/:total/:tipPercentage", (req, res) => {
  const total = req.params.total
  console.log(req.params)
  const tipPercentage = req.params.tipPercentage
  const tip = (total) * (tipPercentage)
  res.send(`${tipPercentage*(total*.01)}`)
})

//Tells server to listen for request at port 3000
app.listen(3000, () => {
  console.log("Listening to homework server...")
})