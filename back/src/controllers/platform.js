/*  == PLATFORM CONTROLLER == */
const path = require('path');
const fs = require('fs');


let db = require('../database/models');
let sequelize = require('sequelize');
const RegistroTorre = db.RegistroAdministrativo


const platformController = {

    locals: function(req,res){
       
    },

    arrivals: function(req,res){

        let registroArribos = db.RegistroAdministrativo.findAll(
            {include: [
                {association: "registro_empresa"},
                {association: "registro_estado"},
                {association: "registro_servicio"} 
            ], where: {estado_id: 1}},
        )
        
        registroArribos.then( (data) => {
            res.json(data)
        })
        .catch( error => console.log(error))

    },

    depratures: function(req,res){
        res.json('== PLATAFORMA PARTIDAS==')
    },

    createTicket: function(req,res){
        // const userLogged = req.session.userLogged;
        // let usuario = Usuario.findOne({
        //   where: {
        //     id: 2,
        //   },
        // });
            
        RegistroTorre.create({
            fecha_ingreso: req.body.fecha_ingreso,
            hora_ingreso: req.body.hora_ingreso,
            interno: req.body.interno,
            empresa_id: req.body.empresa_id,
            servicios_id: req.body.servicios_id,
            usuarios_id: req.body.usuarios_id,
            plataformas_id: 1,
            estado_id: req.body.estado_id,
            destino: req.body.destino,
        }).then(() => {
            return res.json('exito');
        }).catch( err => console.log(err))
          
        
    }
}

module.exports = platformController;