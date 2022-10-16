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
  // Se inicia el proceos de login (ingreso) donde se busca al usuario en la base de datos, se hace una comparacion de contrasena encriptada y segun el resultado se redirecciona o se devuelve valores con el error
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

          return res.redirect("/ingreso")

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
  logout: (req, res) => {
    res.clearCookie('userEmail');
    req.session.destroy();
    return res.redirect("/")
  },
  // Direccionamos al usuario a la pagina de ingreso, donde se valida su rol.
  redirect: (req, res) => {
    const userLogged = req.session.userLogged
      res.render("usuarios/welcome",{
      userLogged
     });
  },

  redirectRole: (req, res) => {
    const userLogged = req.session.userLogged

    if (userLogged.roles_id === 1) {
      res.send("Hola, estas ingresando al área de Administración")
    } else if (userLogged.roles_id === 2) {
      res.redirect("/ingreso/sector/recursosHumanos")
    } else if (userLogged.roles_id === 3) {
      res.send("Hola, estas ingresando al área de Contabilidad")
    } else if (userLogged.roles_id === 4) {
      res.send("Hola, estas ingresando al área de Operador de seguridad")
    }
    else {
      res.send("No tienes permiso para ingresar a esta vista")
    }
  },
  rrhh: (req, res) => {
    const userLogged = req.session.userLogged
    res.render("usuarios/recursosHumanos", {
      userLogged
    });
  }



}



module.exports = ControllerInicioUsuario