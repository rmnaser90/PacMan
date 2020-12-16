const express =require('express')
const app = express()
const mongoose = require('mongoose')
const path= require('path')
mongoose.connect("mongodb://localhost/things", { useNewUrlParser: true, useUnifiedTopology: true })

app.use(express.static(path.join(__dirname,'/dist')))
app.use(express.static(path.join(__dirname,'/node_modules')))


const port =3001
app.listen(port, function () {
    console.log ("up and running")
})
