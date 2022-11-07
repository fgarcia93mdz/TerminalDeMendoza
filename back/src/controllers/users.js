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


const deleteUser = async (req,res) => {
  try {
    console.log(req.usuario.id);
    const usuarioAEliminar = parseInt(req.query.id);

    let usuario = await Usuario.findOne({
      where: {
        id: usuarioAEliminar,
      },
    });
    if (usuario !== null) {
    

      // por ahora falla porque la tabla usuario_eliminado tiene una fk a usuarios y cuando se 
      // elimina un usuario se borran todos los logs de ese usuario en la tabla usuario_eliminado
      
      //   await EliminarUsuario.create({
      //     usuario_id: req.usuario.id,
      //     motivo: req.body.motivo,
      //     usuario_id_eliminado: usuarioAEliminar,
      //   });

      // await Usuario.destroy({
      //   where: {
      //     id: usuarioAEliminar,
      //   },
      //   force: true,
      // });

      return res.status(200).json({ mensaje: "usuario eliminado correctamente" });
    } else {
      return res.status(400).json({ mensaje: "no existe el usuario" });
    }

  } catch (error) {
    return res.status(400).json({ mensaje: error });
  }
}

const modifyUser = (req,res) => {

}

module.exports = { register, changePassword, modifyUser, deleteUser };