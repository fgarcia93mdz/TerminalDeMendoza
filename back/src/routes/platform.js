// API ROUTES FOR TABLE

const express = require('express');
const router = express.Router();
const platformController = require('../controllers/platform')

router.get('/arribos', platformController.arrivals)
router.get('/partidas', platformController.depratures)
router.get('/locales', platformController.locals) // '/api/plataforma/locales' 


// crear rutas 
// crear controlador
// enviar datos

module.exports = router;