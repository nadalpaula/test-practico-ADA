var express = require('express');
var router = express.Router();
var busquedaController = require('../Controllers/busquedaController')
var detallesController = require('../Controllers/detallesController')
/* GET home page. */


router.get('/api/items', busquedaController.productos)
//router.get('/api/items/​:id')
router.get('/api/items/:id', detallesController.detalles)
module.exports = router;
