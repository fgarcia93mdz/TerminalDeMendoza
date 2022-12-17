const db = require("../database/models");
const Empresa = db.Empresa;
const { Op } = require("sequelize");

const getEmpresa = async (req, res) => {
  let empresaId = req.params.id;
  try {
    const empresa = await Empresa.findOne({
      where: {
        borrado: {
          [Op.eq]: "0",
        },
        id: empresaId,
      },
    });

    if (empresa == null) {
      return res.status(400).json({ mensaje: "empresa no encontrada" });
    }

    return res.status(200).json({
      empresa,
    });
  } catch (error) {
    return res.status(400).json({ mensaje: error });
  }
};

const updateEmpresa = async (req, res) => {
  let empresaId = req.params.id;
  try {
    const empresaEncontrada = await Empresa.findOne({
      where: {
        borrado: {
          [Op.eq]: "0",
        },
        id: empresaId,
      },
    });

    if (empresaEncontrada == null) {
      return res.status(400).json({ mensaje: "Empresa no encontrada" });
    }

    const dataACambiar = {};

    const { empresa, siglas, img, cuit } = req.body;

    if (empresa != null) dataACambiar.empresa = empresa;
    if (siglas != null) dataACambiar.siglas = siglas;
    if (img != undefined) dataACambiar.img = img;
    if (cuit != null) dataACambiar.cuit = cuit;

    if (Object.keys(dataACambiar).length === 0) {
      return res
        .status(400)
        .json({ mensaje: "Se require al menos un dato a modificar" });
    }

    await Empresa.update(dataACambiar, {
      where: {
        id: empresaId,
      },
    });

    return res.status(200).json({
      mensaje: "Empresa modificada"
    });
  } catch (error) {
    return res.status(400).json({ mensaje: error });
  }
};

const getAllEmpresas = async (req, res) => {
  try {
    const empresas = await Empresa.findAll({
      where: {
        borrado: {
          [Op.eq]: "0",
        },
      },
    });
    console.log(empresas);
    return res.status(200).json({
      empresas,
    });
  } catch (error) {
    return res.status(400).json({ mensaje: error });
  }
};

const addNewEmpresa = async (req, res) => {
  //console.log(req.body);

  const { empresa, siglas, img, cuit } = req.body;
  if (!empresa || !siglas || !img || !cuit) {
    return res.status(400).json({ mensaje: "faltan datos" });
  }

  try {
    await Empresa.create({
      empresa: req.body.empresa,
      siglas: req.body.siglas,
      img: req.body.img,
      cuit: req.body.cuit,
    });
    return res.status(200).json({
      mensaje: "empresa creada correctamente",
    });
  } catch (error) {
    return res.status(400).json({ mensaje: error });
  }
};

const deleteEmpresa = async (req, res) => {
  let empresaId = req.params.id;

  try {
    await Empresa.update(
      { borrado: "1" },
      {
        where: {
          id: empresaId,
        },
      }
    );
    return res.status(200).json({
      mensaje: "empresa borrada",
    });
  } catch (error) {
    return res.status(400).json({ mensaje: error });
  }
};

module.exports = {
  getAllEmpresas,
  addNewEmpresa,
  deleteEmpresa,
  getEmpresa,
  updateEmpresa,
};
