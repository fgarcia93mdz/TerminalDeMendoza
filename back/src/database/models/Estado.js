module.exports = (sequelize, dataTypes) => {

    let alias = 'Estado';
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      tipo: {
        type: dataTypes.STRING(45),
        allowNull: false
      },
    };

    let config = {
      tableName: 'Estado',
      timestamps: false
    }
    const Estado = sequelize.define(alias, cols, config);
  
    Estado.associate = function (models) {
  
      Estado.hasMany(models.RegistroAdministrativo, {
        as: "registro_estado",
        foreignKey: "estado_id"
      })

    }
  
    return Estado
  }