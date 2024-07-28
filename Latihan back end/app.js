const express = require('express')
const app = express()
const port = 3030
const route = require('./index')

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use(route)
app.listen(port,() => {
  console.log(`Example app listening on port ${port}`)
})