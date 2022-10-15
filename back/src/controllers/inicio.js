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

    Usuario.findOne({
      where: {
        usuario: req.body.email
      }
    }).then((userToLogin) => {

      if (userToLogin) {
        let isOkPassword = bcryptjs.compareSync(req.body.password, userToLogin.password);

        if (isOkPassword) {

          delete userToLogin.password;
          req.session.userLogged = userToLogin

          if (req.body.recordarPlayer) {
            res.cookie('userEmail', req.body.email, {
              maxAge: (1000 * 60) * 60
            })
          }

          return res.redirect("/register/userPlayer/welcome")

        }

        return res.render('index', {
          errors: {
            password: {
              msg: 'Error en tu contraseña'
            }
          }
        });
      }

      return res.render('index', {
        errors: {
          email: {
            msg: 'No se encuentra registrado este usuario'
          }
        }
      });
    })
  },
  redirect: (req, res) => {

    res.render("partial/register/redireccion2", {
      userLogged: req.session.userLogged
    });

  },





}



module.exports = ControllerInicioUsuario