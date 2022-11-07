var express = require('express');
var router = express.Router();
const {register, changePassword, modifyUser, deleteUser } = require("../controllers/users");
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

router.patch("/modifyUser/:id", authenticateToken, modifyUser);
//6 seria el user id a editar
// PATCH localhost:8080/users/modifyUser/6
//NOTA: no es necesario que tenga los 4 campos, solo los que va a modificar , tipo si solo quiere modificar nombre en el json va solo nombre
// BODY
// {
//   "nombre": "ntest222234a23111",
//   "apellido": "atest22223",
//   "usuario": "utest222223",
//   "rol": "1"
// }
// HEADERS
// authorization "Bearer token..."

router.delete("/deleteUser/:id", authenticateToken, deleteUser);
//2 seria el user id a eliminar
//DELETE localhost:8080/users/deleteUser/2
// BODY
// {
//   "motivo":"porque si"
// }
// HEADERS
// authorization "Bearer token..."

module.exports = router;
