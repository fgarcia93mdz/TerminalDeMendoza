const jwt = require("jsonwebtoken");
const db = require("../database/models");
const Usuario = db.Usuario;
const UsuarioLog = db.UsuarioLog;
const bcryptjs = require("bcryptjs");
require("dotenv").config();

generateAccessToken = (usuario) => {
  return jwt.sign(usuario, process.env.TOKEN_SECRET);
};

//actualmente el logout no tiene en cuenta si un usuario se logeó, se le apagó la pc o cerró el navegador y despues
//se volvió a logear, no hay registro del logeo. hay que ver como conectar x logeo a x deslogeo
const logout = async (req, res) => {
  const timestamp = req.usuario.iat * 1000;
  let ingreso = new Date(timestamp);
  try {
    const logLogout = await UsuarioLog.create({
      usuarios_id: req.usuario.id,
      ingreso: ingreso,
      egreso: new Date(),
    });
    return res.status(200).json({ mensaje: "deslogeado" });
  } catch (error) {
    return res.status(400).json({ mensaje: error });
  }
};

const login = async (req, res) => {
  try {
    const userToLogin = await Usuario.findOne({
      where: {
        usuario: req.body.email,
      },
    });
    if (userToLogin) {
      let isOkPassword = bcryptjs.compareSync(
        req.body.password,
        userToLogin.password
      );
      if (isOkPassword) {
        const usuario = {
          nombre: userToLogin.dataValues.nombre,
          apellido: userToLogin.dataValues.apellido,
          rol: userToLogin.dataValues.roles_id,
          id: userToLogin.dataValues.id,
        };
        const token = generateAccessToken(usuario);
        return res.status(200).json(token);
      } else {
        return res.status(400).json({ mensaje: "credenciales invalidas" });
      }
    }
  } catch (error) {
    return res.status(400).json({ mensaje: error });
  }
};

module.exports = { login, logout };
