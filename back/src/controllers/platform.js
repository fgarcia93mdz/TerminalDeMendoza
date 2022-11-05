/*  == PLATFORM CONTROLLER == */
const path = require('path');
const fs = require('fs');


let db = require('../database/models');
let sequelize = require('sequelize');


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
    }
}

module.exports = platformController;