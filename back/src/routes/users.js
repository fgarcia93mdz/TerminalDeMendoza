var express = require('express');
var router = express.Router();
const {register, changePassword } = require("../controllers/users");
const { authenticateToken } = require("../middlewares/authenticateToken.js");
const verifyRoles = require("../middlewares/verifyRoles");
const ROLES = require("../config/roles");

router.post('/register',register)
//data para el front
// POST localhost:8080/users/register
// {
//   "nombre": "ntest",
//   "apellido": "atest",
//   "usuario": "utest",
//   "password": "ptest",
//   "rol": "3"
// }


router.post("/changePassword", authenticateToken , verifyRoles(ROLES.Administrador,ROLES.RRHH),changePassword);
//data para el front
// POST localhost:8080/users/changePassword
// {
//   "password":"ptest",
//   "nuevaClave":"ptest1"
// }
// HEADERS
// authorization "Bearer token..."

module.exports = router;
