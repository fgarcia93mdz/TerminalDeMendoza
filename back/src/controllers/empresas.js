const db = require("../database/models");
const Empresa = db.Empresa;
const { Op } = require("sequelize");

const getAllEmpresas = async (req, res) => {
  try {
    const empresas = await Empresa.findAll({
      where: {
        borrado: {
          [Op.eq]: '0'
        }
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
    Empresa.create({
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

  
}

module.exports = {
  getAllEmpresas,
  addNewEmpresa,
  deleteEmpresa,
};
