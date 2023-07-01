const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_type: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_type"
    },
    nom_type: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nom_type"
    }
  };
  const options = {
    tableName: "type_voyage",
    comment: "",
    indexes: []
  };
  const TypeVoyageModel = sequelize.define("type_voyage_model", attributes, options);
  return TypeVoyageModel;
};