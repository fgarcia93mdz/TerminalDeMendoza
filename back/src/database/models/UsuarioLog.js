module.exports = (sequelize, dataTypes) => {

  let alias = 'UsuarioLog';
  let cols = {

    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    ingreso: {
      type: dataTypes.DATE,
    },
    egreso: {
      type: dataTypes.DATE,
    },
    usuario_log: {
      type: dataTypes.STRING(45),
      allowNull: false
    },
  };
  let config = {
    tableName: 'usuarios_log',
    timestamps: false,
    // createdAt: 'created_at',
    // updatedAt: 'updated_at',
    // deletedAt: false
  }
  const UsuarioLog = sequelize.define(alias, cols, config);

  UsuarioLog.associate = function (models) {

  }

  return UsuarioLog
}