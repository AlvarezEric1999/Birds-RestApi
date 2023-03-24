/* eslint-disable no-unused-vars */
/* eslint-disable semi */

const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    console.log('conectado a la base de datos')
  } catch (error) {
    throw new Error('error al a hora de iniciar la base de datos')
  }
}

module.exports = {
  dbConnection
}
