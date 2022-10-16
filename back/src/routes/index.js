var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');
const { body } = require('express-validator');

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
//Validaciones para el formulario 
const validations = [
  body("nombre").notEmpty().withMessage('Tienes que escribir un nombre'),
  body("apellido").notEmpty().withMessage('Tienes que escribir un apellido'),
  body("email").notEmpty().withMessage('Tienes que escribir un usuario'),
  body("password").notEmpty().withMessage('Tienes que escribir una contraseña'),
  body("password2").notEmpty().withMessage('Tienes que escribir una contraseña'),
  body("email").notEmpty().withMessage('Tienes que escribir un usuario'),
  body("password").notEmpty().withMessage('Tienes que escribir una contraseña'),
  body("password2").notEmpty().withMessage('Tienes que escribir una contraseña'),
  body("edad").notEmpty().withMessage('Tienes que escribir una edad'),
  body("telefono").notEmpty().withMessage('Tienes que escribir un telefono'),
  body("zonasdejuego").notEmpty().withMessage('Tienes que seleccionar una opcion'),
  body("autoValoracion").notEmpty().withMessage('Tienes que seleccionar una opcion'),
  body("deporte1").notEmpty().withMessage('Tienes que seleccionar una opcion'),
  body("deporte2").notEmpty().withMessage('Tienes que seleccionar una opcion'),
  body("categoria").notEmpty().withMessage('Tienes que escribir una posicion'),
  body("categoria2").notEmpty().withMessage('Tienes que escribir una posicion'),
  body("dia1").notEmpty().withMessage('Tienes que seleccionar una opcion'),
  body("hora1").notEmpty().withMessage('Los campos con * son obligatorios')
];


// Llamado al controlador
const ControllerInicioUsuario = require('../controllers/inicio')

/* Home con inicio de sesion */
router.get('/', ControllerInicioUsuario.inicio)
router.post('/ingresoUsuario', ControllerInicioUsuario.login);

// Pre ingreso para saber roles 
router.get('/ingreso', ControllerInicioUsuario.redirect);
router.get('/logout', ControllerInicioUsuario.logout);
router.get('/ingreso/sector', ControllerInicioUsuario.redirectRole);

// Area de Recursos humanos
router.get('/ingreso/sector/recursosHumanos', ControllerInicioUsuario.rrhh);
router.get('/ingreso/sector/recursosHumanos/:id/nuevoUsuario', validations, ControllerInicioUsuario.nuevoUsuario);

module.exports = router;
