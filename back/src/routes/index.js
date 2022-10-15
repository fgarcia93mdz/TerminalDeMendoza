var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');

// ************ MULTER ************

const storage = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, 'public/img/equipos')
  },

  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname)
    cb(null, file.fieldname + '-' + uniqueSuffix)

    // const name = file.originalname
    // cb(null, name)

  }

})
// Se usa para cargar de fotos 
const upload = multer({
  storage: storage
}); 

// Llamado al controlador
const ControllerInicioUsuario = require('../controllers/inicio')

/* Home con inicio de sesion */
router.get('/', ControllerInicioUsuario.inicio)
router.post('/ingresoUsuario', ControllerInicioUsuario.login);
// Pre ingreso para saber roles 
router.get('/welcome', ControllerInicioUsuario.redirect);


module.exports = router;
