/* eslint-disable semi */

const { Router } = require('express');
const { getBird, postBird, putBird, deleteBird } = require('../controllers/birds.controller');

const router = Router();

router.get('/', getBird)

router.post('/', postBird)

router.put('/:id', putBird)

router.delete('/', deleteBird)

module.exports = router
