const jwt = require("jsonwebtoken");
const db = require("../database/models");
const Usuario = db.Usuario;
const EliminarUsuario = db.UsuarioEliminado;
const bcryptjs = require("bcryptjs");

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

const deleteUser = async (req, res) => {
  //tenemos que poner el middleware para que solo puedan eliminar si tienen permiso.
  try {
    const usuarioAEliminar = parseInt(req.params.id);

    const usuario = await Usuario.findOne({
      where: {
        id: usuarioAEliminar,
      },
    });

    console.log(
      "🚀 ~ file: users.js ~ line 83 ~ deleteUser ~ usuario",
      usuario.dataValues
    );
    if (usuario != null) {
      const eliminado = await Usuario.destroy({
        where: {
          id: usuarioAEliminar,
        },
        force: true,
      });

      if (eliminado != null) {
        await EliminarUsuario.create({
          nombre: usuario.nombre,
          apellido: usuario.apellido,
          motivo: req.body.motivo,
          usuario_eliminado: usuario.usuario,
        });
        return res
          .status(200)
          .json({ mensaje: "usuario eliminado correctamente" });
      }
    } else {
      return res.status(400).json({ mensaje: "no existe el usuario" });
    }
  } catch (error) {
    return res.status(400).json({ mensaje: error });
  }
};

const getUserInfoToModify = async (req, res) => {};

const modifyUser = async (req, res) => {
  const usuarioAModificar = parseInt(req.params.id);

  const { nombre, apellido, usuario, rol } = req.body;

  const dataACambiar = {};

  try {
    let encontrado = await Usuario.findOne({
      where: {
        id: usuarioAModificar,
      },
    });

    if (encontrado != null) {
      //casos que no son contemplados
      //toda la data es repetida con lo que ya esta en la base de datos

      if (nombre != null) dataACambiar.nombre = nombre;
      if (apellido != null) dataACambiar.apellido = apellido;
      if (usuario != null) dataACambiar.usuario = usuario;
      if (rol != null) dataACambiar.roles_id = rol;

      if (Object.keys(dataACambiar).length === 0) {
        return res
          .status(400)
          .json({ mensaje: "falta proporcionar datos a modificar" });
      }
      await Usuario.update(dataACambiar, {
        where: {
          id: usuarioAModificar,
        },
      });
      return res
        .status(200)
        .json({ mensaje: "usuario modificado correctamente" });
    } else {
      return res
        .status(400)
        .json({ mensaje: "no existe el usuario a modificar" });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ mensaje: "error a la hora de modificar usuario" });
  }
};

module.exports = { register, changePassword, modifyUser, deleteUser };
