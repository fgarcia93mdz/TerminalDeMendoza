const jwt = require("jsonwebtoken");
const db = require("../database/models");
const Usuario = db.Usuario;
const bcryptjs = require("bcryptjs");
require("dotenv").config();

generateAccessToken = (usuario) => {
  return jwt.sign(usuario, process.env.TOKEN_SECRET);
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

module.exports = { login };
