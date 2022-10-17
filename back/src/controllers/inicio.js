const fs = require('fs');
const path = require('path');
const {
  Op
} = require("sequelize");
const {
  Sequelize
} = require('sequelize');
// Validaciones
const {
  validationResult
} = require('express-validator');

// encriptacion de la contraseña
const bcryptjs = require('bcryptjs');

// Llamado a la base de datos 
const db = require('../database/models')

// Modelo de DB
const Usuario = db.Usuario;
const Rol = db.Rol;

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
    res.render("usuarios/welcome", {
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
    let usuario = Usuario.findOne({
      where: { id: userLogged.id }
    })
    let usuarios = Usuario.findAll({
      include: ['rol_usuario'],
    })
    Promise
      .all([usuarios, usuario])
      .then(([usuarios, usuario]) => {

        res.render("usuarios/recursosHumanos", {
          userLogged,
          usuarios, usuario
        });
      })
  },
  nuevoUsuario: (req, res) => {
    const userId = req.params.id
    let usuario = Usuario.findOne({
      where: { id: userId }
    })
    let roles = Rol.findAll({
    })
    Promise
      .all([usuario, roles])
      .then(([usuario, roles]) => {
        res.render('usuarios/nuevoUsuario', {
          userId,
          usuario, roles
        })
      })
  },
  agregarUsuario: (req, res) => {
    let roles = Rol.findAll()
    const userLogged = req.session.userLogged
    let usuario = Usuario.findOne({
      where: { id: userLogged.id }
    })
    Promise
      .all([roles, usuario])
      .then(([roles, usuario]) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
          return res.render('usuarios/nuevoUsuario', {
            errors: resultValidation.mapped(),
            oldData: req.body,
            roles,
            usuario
          });
        }
      })
    let usuarioDB = Usuario.findOne({
      where: { usuario: req.body.usuario }
    }).then((userInDB) => {
      let roles = Rol.findAll()
      const userLogged = req.session.userLogged
      let usuario = Usuario.findOne({
        where: { id: userLogged.id }
      })
      Promise
        .all([usuarioDB, roles, usuario])
        .then(([usuarioDB, roles, usuario]) => {
          if (userInDB != null) {
            return res.render('usuarios/nuevoUsuario', {
              errors: {
                usuario: {
                  msg: 'Este usuario ya está registrado, intenta con otro'
                }
              },
              oldData: req.body,
              roles,
              usuarioDB,
              usuario

            });
          } else {
            Usuario.create({
              nombre: req.body.nombre,
              apellido: req.body.apellido,
              usuario: req.body.usuario,
              password: bcryptjs.hashSync(req.body.password, 10),
              roles_id: req.body.rol,
              estado_password: 0
            }).then(() => {
              return res.redirect('/ingreso/sector/recursosHumanos');
            })
          }
        })
    })
  },
  cambiarClave: (req, res) => {
    const userLogged = req.session.userLogged
    console.log("🚀 ~ file: inicio.js ~ line 200 ~ userLogged", userLogged)
    if (userLogged) {
      let isOkPassword = bcryptjs.compareSync(req.body.password, userLogged.password);
      console.log("🚀 ~ file: inicio.js ~ line 202 ~ isOkPassword", isOkPassword)
      if (isOkPassword == true) {
        Usuario.update({
          password: bcryptjs.hashSync(req.body.nuevaClave, 10),
          estado_password: 1
        }, {
          where: { id: userLogged.id }
        }).then(() => {
          return res.redirect("/ingreso")
        })
      }
    }

  },
  viejaContraseña: (req, res) => {
    const userLogged = req.session.userLogged
    let usuario = Usuario.findOne({
      where: { id: userLogged.id }
    })
    Promise
      .all([usuario])
      .then(([usuario]) => {
        res.render('usuarios/cambiarClave', {
          usuario
        })
      })
  },
  informe:(req, res=>{
    res.render('usuarios/seguridad')
  })




}



module.exports = ControllerInicioUsuario