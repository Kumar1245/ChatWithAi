const express = require("express")
const path = require("path")
const logger = require("morgan")
const app = express()

app.use(logger("dev"))

const NODE_ENV = process.env.NODE_ENV

console.log("NODE_ENV", NODE_ENV)

app.use(express.static(path.join(__dirname, "build")))

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"))
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
