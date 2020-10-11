const express = require('express');
const router = express.Router();

const pruebaController = require('../controllers/pruebaController');

router.get('/pruebas',
    pruebaController.obtenerPruebas
);

router.post('/prueba', 
    pruebaController.crearPrueba
);

module.exports = router;
