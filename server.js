const express =require('express')
const app = express()
const socket = require('socket.io')
const mongoose = require('mongoose')
const path= require('path')

app.use(express.static(path.join(__dirname,'/dist')))
app.use(express.static(path.join(__dirname,'/node_modules')))


const PORT = process.env.PORT ||3001
const server = app.listen(PORT, function () {
    console.log ("up and running on port: "+PORT)
})

const io = socket(server)
io.on('connection', function (socket) {
    console.log("made socket connection");
    socket.on('game', function (game) {
        io.sockets.emit('game', game)
    })
})

