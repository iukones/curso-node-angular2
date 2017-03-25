'use strict'

var express = require('express');
var favoritoController = require('../controllers/favorito');
var api = express.Router();

// ejemplo de rutas y parametros de tipo GET.
api.get('/prueba/:nombre?', favoritoController.prueba);
api.get('/favorito/:id', favoritoController.getFavorito);
api.post('/favorito', favoritoController.saveFavorito);
api.put('/favorito', favoritoController.updateFavorito);
api.delete('/favorito/:id', favoritoController.deleteFavorito);

module.exports = api;