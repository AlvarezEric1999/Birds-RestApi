/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */

// eslint-disable-next-line semi
const { Schema, model } = require('mongoose');

const BirdSchema = Schema({
  nombreCientifico: {
    type: String,
    require: true
  },
  nombreComun: {
    type: String,
    require: true
  },
  descripcion: {
    type: String,
    require: true
  },
  alturaMinima: {
    type: Number,
    require: true
  },
  alturaMaxima: {
    type: Number,
    require: true
  }
});
module.exports = model('Bird', BirdSchema)
