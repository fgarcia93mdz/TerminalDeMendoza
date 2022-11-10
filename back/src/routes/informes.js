var express = require("express");
var router = express.Router();
const {
  informesListado,
  getInforme,
modificarInforme} = require("../controllers/informes");
const { authenticateToken } = require("../middlewares/authenticateToken.js");
const verifyRoles = require("../middlewares/verifyRoles");

//NOTA: fijarse que roles puede hacer que cosa y usar el middleware veryfyRoles
const ROLES = require("../config/roles");

router.get(
  "/listado",
  informesListado
);
//GET localhost:8080/informes/listado
//authorization Bearer token...
router.get("/:id", authenticateToken, getInforme);
//GET localhost:8080/informes/2
//authorization Bearer token...
router.patch("/modificar/:id", authenticateToken, modificarInforme);
//PATCH localhost:8080/informes/modificar/2
//authorization Bearer token...
//JSON (al menos uno de estos campos)
//{
//   "estado": "3",
//   "destino": "aaab",
//   "fecha_salida": "2022-12-12",
//   "hora_salida": "10:10:10",
//   "plataforma": "2",
//   "fecha_ingreso": "2000-01-01",
//   "hora_ingreso": "05:05:05",
//   "empresa": 3
// }




module.exports = router;
