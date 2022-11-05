const express = require('express')
const router = express.Router()

const { login } = require("../controllers/auth.js");

router.post('/',login);
//data para el front
// POST http://localhost:8080/auth
// {
//   "email":"utest",
//   "password":"ptest"
// }


module.exports = router;