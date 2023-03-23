/* eslint-disable no-unused-vars */
/* eslint-disable semi */

const { response } = require('express');

const getBird = (req, res = response) => {
  res.json({
    message: 'get birds'
  })
}

const postBird = (req, res = response) => {
  const bird = req.body
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
