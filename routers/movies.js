const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movieController')

// index
router.get('/', movieController.index)

// show movie
router.get('/:id', movieController.show_movie)

// show reviews
router.get('/:id/reviews', movieController.show_reviews)

module.exports = router