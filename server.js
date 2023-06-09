//After creating a Javascript file 'server.js' and running command 'npm init', you should receive a 'package.json' in your working directory

//Install express using 'npm i express' or 'npm i express -y' to skip intial questions.

//Require 'express'
const express = require("express")
//Set the app
const app = express()
//Tell the server where to listen for request (port #) (*see bottom of 'server.js'*)

//Greetings
app.get("/greeting/:name", (req, res) => {
  //res.send("Hello, stranger")
  //res.send(req.params)
  const name = "Nicholas"
  res.send(`What's up, ${name}`)
})

//Tip Calculator
//Give app a route of '/tip' which should expect 2 params ('total' and 'tipPercentage'
app.get("/tip/:total/:tipPercentage", (req, res) => {
  const total = req.params.total
  console.log(req.params)
  const tipPercentage = req.params.tipPercentage
  const tip = (total) * (tipPercentage)
  res.send(`${tipPercentage * (total * .01)}`)
})

//Magic 8 Ball
//Create a route of '/magic' that should expect a phrase in the URL that asks the Magic 8 Ball a question
//When user goes to that route and asks a question i.e. "Will I be a milionaire", user should have returned to him to him his question AND a random Magic 8 Ball response (*see array below*).
//Use %20 to express a space in the URL
//Send the Magic 8 Ball response back betwewen HTML <h1> tags
//Use this array of Magic 8 Ball Responses
app.get("/magic/:question", (req, res) => {
  const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]
  const question = req.params.question
  const answer = responses[Math.floor(Math.random()*responses.length)]
  res.send(`<h1>${question}<br>${answer}</h1>`)
})



//Tells server to listen for request at port 3000
app.listen(3000, () => {
  console.log("Listening to homework server...")
})