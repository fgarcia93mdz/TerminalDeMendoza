var express = require("express");
var router = express.Router();
const {
  informesListado,
  getInforme,
  modificarInforme,
  addInformeSeguridad,
  getDataInformeSeguridad,
  informesListadoSeparadosPorEstado,
} = require("../controllers/informes");
const { authenticateToken } = require("../middlewares/authenticateToken.js");
const verifyRoles = require("../middlewares/verifyRoles");

//NOTA: fijarse que roles puede hacer que cosa y usar el middleware veryfyRoles
const ROLES = require("../config/roles");


router.post("/seguridad/nuevo", authenticateToken,addInformeSeguridad);
//falta agregar middleware de roles
//POST localhost:8080/informes/seguridad/nuevo
//authorization Bearer token...
//JSON
// {
//   "fecha_ingreso": "2022-11-16",
//   "hora_ingreso": "16:51",
//   "interno": "4",
//   "empresa_id": "2",
//   "servicios_id": "2",
//   "estado_id": "1",
//   "destino": "AAAAAA"
// }


router.get("/seguridad/data", authenticateToken, getDataInformeSeguridad);
//falta agregar middleware de roles
//GET localhost:8080/informes/seguridad/data
//authorization Bearer token...
//devuelve toda la data necesaria para rellenar los dropdown

router.get(
  "/listado",
  informesListado
);
//falta agregar middleware de roles
//GET localhost:8080/informes/listado
//authorization Bearer token...

router.get(
  "/listadoSeparado",
  authenticateToken, informesListadoSeparadosPorEstado
);

//GET localhost:8080/informes/listadoSeparado
//authorization Bearer token...

router.get("/:id", authenticateToken, getInforme);
//falta agregar middleware de roles
//GET localhost:8080/informes/2
//authorization Bearer token...

router.patch("/modificar/:id", authenticateToken, modificarInforme);
//falta agregar middleware de roles
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
