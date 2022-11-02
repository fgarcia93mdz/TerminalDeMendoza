const jwt = require("jsonwebtoken");
const db = require("../database/models");
const Usuario = db.Usuario;
const bcryptjs = require("bcryptjs");
//esta clave secreta hay que ponerla en un .env
const TOKEN_SECRET = "as1d65a4f6849w815416fd45w987fdw8dwf";

generateAccessToken = (usuario) => {
  //por ahora el token no expira, deberia...
  return jwt.sign(usuario, TOKEN_SECRET);
};

const register = async (req, res) => {
  try {
    const { nombre, apellido, usuario, password, rol } = req.body;
    if (!nombre || !apellido || !usuario || !password || !rol) {
      return res.status(400).json({ mensaje: "faltan datos" });
    }

    const encontrado = await Usuario.findOne({
      where: { usuario: usuario },
    });
    if (encontrado !== null) {
      return res.status(400).json({ mensaje: "el usuario ya existe" });
    }

    await Usuario.create({
      nombre,
      apellido,
      usuario,
      password: bcryptjs.hashSync(password, 10),
      roles_id: rol,
      estado_password: 0,
    });
    return res.status(200).json({ mensaje: "usuario creado exitosamente" });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const changePassword = async (req, res) => {
  try {
    //el token llega acá validado, hay que sacar el id del req.usuario
    const { id } = req.usuario;

    const { password, nuevaClave } = req.body;
    if (!password || !nuevaClave) {
      return res.status(400).json({ mensaje: "faltan datos" });
    }

    const project = await Usuario.findOne({ where: { id } });

    if (project === null) {
      return res
        .status(400)
        .json({ mensaje: "no se encontro usuario con esa id" });
    }
    let isOkPassword = bcryptjs.compareSync(password, project.password);

    if (isOkPassword == false) {
      return res.status(400).json({ mensaje: "la contraseña es invalida" });
    }

    await Usuario.update(
      {
        password: bcryptjs.hashSync(nuevaClave, 10),
        estado_password: 1,
      },
      {
        where: { id },
      }
    );
    return res.status(200).json({ mensaje: "clave cambiada exitosamente" });
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

module.exports = { login, register, changePassword };
