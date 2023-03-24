/* eslint-disable no-unused-vars */
/* eslint-disable semi */

const { response } = require('express');
const Bird = require('../models/bird')

const getBird = async (req, res = response) => {
  const birds = await Bird.find()
  res.json({
    birds
  })
}

const postBird = async (req, res = response) => {
  const body = req.body;
  const bird = new Bird(body);

  await bird.save()

  res.json({
    bird
  });
}

const putBird = (req, res = response) => {
  const id = req.params.id
  res.json({
    message: 'put birds birds',
    id
  });
}

const deleteBird = (req, res = response) => {
  res.json({
    message: 'delete birds'
  });
}

module.exports = {
  getBird,
  putBird,
  postBird,
  deleteBird
}
