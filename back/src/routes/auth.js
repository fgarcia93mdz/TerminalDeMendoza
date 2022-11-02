const express = require('express')
const router = express.Router()

const { login, register, changePassword } = require("../controllers/auth.js");
const { authenticateToken } = require("../middlewares/authenticateToken.js");

router.post('/',login);
//data para el front
// POST http://localhost:8080/auth
// {
//   "email":"utest",
//   "password":"ptest"
// }

router.post('/register',register)
//data para el front
// POST localhost:8080/auth/register
// {
//   "nombre": "ntest",
//   "apellido": "atest",
//   "usuario": "utest",
//   "password": "ptest",
//   "rol": "3"
// }


router.post("/changePassword", authenticateToken, changePassword);
//data para el front
// POST localhost:8080/auth/changePassword
// {
//   "password":"ptest",
//   "nuevaClave":"ptest1"
// }
// HEADERS
// authorization "Bearer token..."


module.exports = router;