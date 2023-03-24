/* eslint-disable padded-blocks */
/* eslint-disable lines-between-class-members */
/* eslint-disable no-trailing-spaces */
/* eslint-disable spaced-comment */
/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
const express = require('express');
const cors = require('cors')
const { dbConnection } = require('../database/config.database')
// const app = express()

class Server {
  constructor () {
    this.port = process.env.PORT
    this.app = express();
    this.path = '/api/birds'
    
    this.conectarDB()
    
    this.middleware()
    
    //rutas
    this.routes();
  }
  //metodos servidor 

  async conectarDB () {
    await dbConnection(); 
  }
  // middlewares
  // eslint-disable-next-line lines-between-class-members
  middleware () {
    // lectura y parseo del body 
    this.app.use(express.json())

    // cors
    this.app.use(cors())
  }

  routes () {
    this.app.use(this.path, require('../routes/bird.routes'))
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`example app listenig on port ${this.port}`)
    })
  }
}

module.exports = Server;