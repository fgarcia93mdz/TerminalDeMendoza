/*  == PLATFORM CONTROLLER == */
const path = require("path");
const fs = require("fs");
const { Op } = require("sequelize");

let db = require("../database/models");
let sequelize = require("sequelize");
const RegistroTorre = db.RegistroAdministrativo;
const moment = require("moment");

const platformController = {
  locals: function (req, res) {},

  arrivals: function (req, res) {
    const diaHoy = moment().add(-1, "days");
    const diaAyer = diaHoy.add(-1, "days");
    let registroArribos = db.RegistroAdministrativo.findAll({
      include: [
        { association: "registro_empresa" },
        { association: "registro_estado" },
        { association: "registro_servicio" },
        { association: "registro_tipo_tv" },
      ],
      order: [["hora_ingreso", "DESC"]],
      where: {
        [Op.and]: [
          { tipo_tv_id: 1 },
          {
            fecha_ingreso: {
              [Op.gte]: diaHoy
            },
          }, {
            estado_id: 1
          }
        ],
      },
    });

    registroArribos
      .then((data) => {
        res.json(data);
      })
      .catch((error) => console.log(error));
  },

  departures: function (req, res) {
    const diaHoy = moment().add(-1, "days");
    const diaAyer = diaHoy.add(-1, "days");
    let registroPartidas = db.RegistroAdministrativo.findAll({
      include: [
        { association: "registro_empresa" },
        { association: "registro_estado" },
        { association: "registro_servicio" },
        { association: "registro_tipo_tv" },
      ],
      order: [["hora_salida", "DESC"]],
      where: {
        [Op.and]: [
          { tipo_tv_id: 2 },
          {
            fecha_ingreso: {
              [Op.gte]: diaHoy,
            },
          },
          {
            estado_id: 1,
          },
        ],
      },
    });

   registroPartidas
     .then((data) => {
       res.json(data);
     })
     .catch((error) => console.log(error));
  },

  createTicket: function (req, res) {
    // const userLogged = req.session.userLogged;
    // let usuario = Usuario.findOne({
    //   where: {
    //     id: 2,
    //   },
    // });
    // RegistroTorre.create({
    //     fecha_ingreso: req.body.fecha_ingreso,
    //     hora_ingreso: req.body.hora_ingreso,
    //     interno: req.body.interno,
    //     empresa_id: req.body.empresa_id,
    //     servicios_id: req.body.servicios_id,
    //     usuarios_id: req.body.usuarios_id,
    //     estado_id: req.body.estado_id,
    //     destino: req.body.destino,
    //     plataformas_id: req.body.plataformas_id
    // }).then(() => {
    //     return res.json('exito');
    // }).catch( err => console.log(err))
  },
};

module.exports = platformController;
