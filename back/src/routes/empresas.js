var express = require("express");
var router = express.Router();
const {
  getAllEmpresas,
  addNewEmpresa,
  deleteEmpresa,
} = require("../controllers/empresas");
const { authenticateToken } = require("../middlewares/authenticateToken.js");
const verifyRoles = require("../middlewares/verifyRoles");

//NOTA: fijarse que roles puede hacer que cosa y usar el middleware veryfyRoles
const ROLES = require("../config/roles");

router.get("/listado", authenticateToken, getAllEmpresas);
//falta agregar middleware de roles
//GET localhost:8080/empresas/listado
//authorization Bearer token...

router.post("/nueva", authenticateToken, addNewEmpresa);
//falta agregar middleware de roles
//POST localhost:8080/empresas/nueva
//JSON
//{
//   "empresa" : "Empresa falsa 123",
//         "siglas" : "EF",
//         "img" : "falsa.png",
//         "cuit" : "53-32523325"
// }
//authorization Bearer token...

router.delete("/:id", authenticateToken, deleteEmpresa)

module.exports = router;
