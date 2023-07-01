const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_avis: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_avis"
    },
    membre: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "membre"
    },
    valeur_avis: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "valeur_avis"
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "date"
    },
    id_membre: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_membre",
      references: {
        key: "id_membre",
        model: "membre_model"
      }
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "createdAt"
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "updatedAt"
    }
  };
  const options = {
    tableName: "avis",
    comment: "",
    indexes: [{
      name: "id_membre",
      unique: false,
      type: "BTREE",
      fields: ["id_membre"]
    }]
  };
  const AvisModel = sequelize.define("avis_model", attributes, options);
  return AvisModel;
};