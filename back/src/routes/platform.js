// API ROUTES FOR TABLE

const express = require('express');
const router = express.Router();
const platformController = require('../controllers/platform')



// METODOS GET para llenar las tablas y pantallas
// localhost:8080/api/platform/
router.get('/arribos', platformController.arrivals) 
router.get('/partidas', platformController.depratures)
router.get('/locales', platformController.locals) // '/api/plataforma/locales' 

// METODOS POST
router.post('/ticket/crear', platformController.createTicket)


// crear rutas 
// crear controlador
// enviar datos

module.exports = router;