/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable semi */
require('dotenv').config()
const Server = require('./models/server')

const server = new Server()

server.listen()

// const express = require('express');

// const app = express();

// const puerto = 5000;

// app.get( '/', (req,res) => {
//     res.send('hello world')
// })

// app.listen(puerto , () => {
//     console.log(`listening on port ${puerto}`)
// })