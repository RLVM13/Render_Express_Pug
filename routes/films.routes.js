
const filmsController = require('../controllers/films.controller');
const router = require('express').Router();

router.get("/:title", filmsController.getFilm);

module.exports = router;