//Require express
const express = require("express")
//Set the app
const app = express()
//Tell the server where to listen for request (port #) (*see bottom of 'server.js'*)

app.get("/", (req, res) => {
  res.send(`99 Bottles of beer on the wall <a href = "/98"> take one down, pass it around</a`)
})

app.get("/98", (req, res) => {
  res.send(`98 Bottles of beer on the wall <a href ="/97"> take one down, pass it around</a>`)
})

app.get("/:number_of_bottles", (req, res) => {
  const number_of_bottles = req.params.number_of_bottles
  const next = `${number_of_bottles}` - 1;
  if (next === -1) {
    res.send(`${number_of_bottles} Bottles of beer on the wall <a href = "/">start over!</a>`)
  } else {
    res.send(`${number_of_bottles} Bottles of beer on the wall <a href = "/${next}">take one down, pass it around</a>`);
  }
})

//Tells server to listen for request at port 3000
app.listen(3000, () => {
  console.log("Listening to pass it around server...")
})