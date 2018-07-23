var express = require('express');
var router = express.Router();
var busquedaController = require('../Controllers/busquedaController')

/* GET home page. */
router.get('/api/items', busquedaController.productos)

module.exports = router;
