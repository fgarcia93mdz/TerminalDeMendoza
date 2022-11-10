const db = require("../database/models");
const Usuario = db.Usuario;
const RegistroTorre = db.RegistroAdministrativo;
const Empresa = db.Empresa;
const Servicio = db.Servicio;
const Plataforma = db.Plataforma;
const Estado = db.Estado;
const horaActual = require("../../public/js/horaActual");
const { Op } = require("sequelize");
const date = require("../../public/js/fechaActualMenosUnDia");

const informesListado = async (req, res) => {
    try {
         let diaHoy = date;
          let hora = horaActual;
         let ingresos = await RegistroTorre.findAll({
           include: [
             "registro_empresa",
             "registro_servicio",
             "registro_plataforma",
             "registro_estado",
           ],
           where: {
             fecha_ingreso: {
               [Op.gt]: diaHoy,
             },
           },
           order: [["hora_salida", "DESC"]],
         });
         return res.status(200).json({ ingresos, hora });
    } catch (error) {
        return res.status(400).json({ mensaje: error });
    }
 
};

const getInforme = async (req, res) => {
  try {
    const ingresoId = req.params.id;
    const diaHoy = date;

    const ingresos = await RegistroTorre.findAll({
      include: [
        "registro_empresa",
        "registro_servicio",
        "registro_plataforma",
        "registro_estado",
      ],
      where: {
        id: ingresoId,
      },
    });
    const empresa = await Empresa.findAll();
    const servicio = await Servicio.findAll();
    const plataforma = await Plataforma.findAll();
    const estado = await Estado.findAll();

    return res.status(200).json({
      ingresos,
      diaHoy,
      empresa,
      servicio,
      plataforma,
      estado,
      ingresoId,
    });
  } catch (error) {
     return res.status(400).json({ mensaje: error });
  }
  
};

const modificarInforme = async (req, res) => {
    try {
        let ingresoId = req.params.id;

        const dataACambiar = {};

        const {
          estado,
          destino,
          fecha_salida,
          hora_salida,
          plataforma,
          fecha_ingreso,
          hora_ingreso,
          interno,
          empresa,
          servicio,
          usuario,
        } = req.body;

        const encontrado = await RegistroTorre.findOne({
          where: {
            id: ingresoId,
          },
        });
        if (encontrado != null) {
          //casos que no son contemplados
          //toda la data es repetida con lo que ya esta en la base de datos
          if (estado != null) dataACambiar.estado_id = estado;
          if (destino != null) dataACambiar.destino = destino;
          if (fecha_salida != null) dataACambiar.fecha_salida = fecha_salida;
          if (hora_salida != null) dataACambiar.hora_salida = hora_salida;
          if (plataforma != null) dataACambiar.plataformas_id = plataforma;
          if (fecha_ingreso != null) dataACambiar.fecha_ingreso = fecha_ingreso;
          if (hora_ingreso != null) dataACambiar.hora_ingreso = hora_ingreso;
          if (interno != null) dataACambiar.interno = interno;

          if (empresa != null) dataACambiar.empresa_id = empresa;
          if (servicio != null) dataACambiar.servicios_id = servicio;
          if (usuario != null) dataACambiar.usuarios_id = usuario;

          if (Object.keys(dataACambiar).length === 0) {
            return res
              .status(400)
              .json({ mensaje: "se require al menos un dato a modificar" });
          }

          const modificacion = await RegistroTorre.update(dataACambiar, {
            where: {
              id: ingresoId,
            },
          });

          console.log(modificacion);
          return res.status(200).json({ mensaje: "modificacion exitosa" });
        }
    } catch (error) {
        return res.status(400).json({ mensaje: error });
    }
  
};



module.exports = {
  informesListado,
  getInforme,
  modificarInforme
};
