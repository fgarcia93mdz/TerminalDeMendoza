module.exports = (sequelize, dataTypes) => {

    let alias = 'RegistroAdministrativo';
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      fecha_ingreso: {
        type: dataTypes.DATE,
        allowNull: false
      },
      hora_ingreso: {
        type: dataTypes.TIME,
        allowNull: false
      },
      interno: {
        type: dataTypes.INTEGER,
        allowNull: false
      },
      fecha_salida: {
        type: dataTypes.DATE,
        allowNull: false
      },
      hora_salida: {
        type: dataTypes.TIME,
        allowNull: false
      },
      empresa_id: dataTypes.BIGINT(11),
      servicios_id: dataTypes.BIGINT(11),
      usuarios_id: dataTypes.BIGINT(11),
      plataformas_id: dataTypes.BIGINT(11),
      estado_id: dataTypes.BIGINT(11),
  
    };
    let config = {
      tableName: 'registro_administrativo',
      timestamps: false
    }
    const RegistroAdministrativo = sequelize.define(alias, cols, config);
  
    RegistroAdministrativo.associate = function (models) {
  
  
      RegistroAdministrativo.belongsTo(models.Empresa, {
        as: "registro_empresa",
        foreignKey: "empresa_id"
      })

      RegistroAdministrativo.belongsTo(models.Estado, {
        as: "registro_estado",
        foreignKey: "estado_id"
      })

      RegistroAdministrativo.belongsTo(models.Usuario, {
        as: "registro_usuario",
        foreignKey: "usuarios_id"
      })

      RegistroAdministrativo.belongsTo(models.Servicio, {
        as: "registro_servicio",
        foreignKey: "servicios_id"
      })

      RegistroAdministrativo.belongsTo(models.Plataforma, {
        as: "registro_plataforma",
        foreignKey: "plataformas_id"
      })
     }
  
    return RegistroAdministrativo
  }