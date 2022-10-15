/*  == PLATFORM CONTROLLER == */
const path = require('path');
const fs = require('fs');


let db = require('../database/models');
let sequelize = require('sequelize');


const platformController = {

    locals: function(req,res){

        let empresas = db.Empresa.findAll()
        
        empresas.then( (data) => {
            res.json(data)
        })
        .catch( error => console.log(error))

     
       
    },

    arrivals: function(req,res){
        res.json('== PLATAFORMA ARRIBOS ==')
    },

    depratures: function(req,res){
        res.json('== PLATAFORMA PARTIDAS==')
    }
}

module.exports = platformController;