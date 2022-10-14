const fs = require('fs');
const path = require('path');
const {
  Op
} = require("sequelize");
const {
  Sequelize
} = require('sequelize');

// encriptacion de la contraseña
const bcryptjs = require('bcryptjs');

// Llamado a la base de datos 
const db = require('../database/models')

// Modelo de DB
const Usuario = db.Usuario;

// Login
const ControllerInicioUsuario = {

  inicio: (req, res, next) => {
    res.render('index', {
  
})
  },
  login: (req, res, next) => {
    
}

}



module.exports = ControllerInicioUsuario