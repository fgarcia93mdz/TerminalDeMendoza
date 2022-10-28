module.exports = (sequelize, dataTypes) => {

    let alias = 'Plataforma';
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      plataforma: {
        type: dataTypes.STRING(45),
        allowNull: false
      },
      servicios_id: dataTypes.BIGINT(11),
  
    };
    let config = {
      tableName: 'Plataformas',
      timestamps: false
    }
    const Plataforma = sequelize.define(alias, cols, config);
  
    Plataforma.associate = function (models) {
  
  
      Plataforma.belongsTo(models.Servicio, {
        as: "plataforma_servicio",
        foreignKey: "servicios_id"
      })

      Plataforma.hasMany(models.RegistroAdministrativo,{
        as: "registro_plataforma",
        foreignKey: "plataformas_id"
      })
    }
  
    return Plataforma
  }